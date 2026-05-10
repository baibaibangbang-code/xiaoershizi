const API_BASE = 'https://api.kie.ai';

async function createTask({ prompt, aspectRatio = '2:3', resolution = '2K', outputFormat = 'png' }) {
  const response = await fetch(`${API_BASE}/api/v1/jobs/createTask`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NANO_BANANA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'nano-banana-pro',
      input: {
        prompt,
        aspect_ratio: aspectRatio,
        resolution,
        output_format: outputFormat,
        image_input: []
      }
    })
  });

  const json = await response.json();

  if (json.code !== 200) {
    throw new Error(json.msg || 'API request failed');
  }

  return json.data.taskId;
}

// 任务查询 endpoint：GET /api/v1/jobs/recordInfo?taskId=xxx
const TASK_QUERY_PATH = '/api/v1/jobs/recordInfo';

async function getTaskResult(taskId) {
  const url = `${API_BASE}${TASK_QUERY_PATH}?taskId=${taskId}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.NANO_BANANA_API_KEY}`,
      'Content-Type': 'application/json',
    }
  });

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return { code: response.status, msg: 'Failed to parse JSON', raw: text };
  }
}

async function pollUntilDone(taskId, { intervalMs = 15000, timeoutMs = 600000 } = {}) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Generation timeout (10 min)')), timeoutMs);

    const poll = async () => {
      try {
        const result = await getTaskResult(taskId);

        // 兼容不同的响应结构
        const status = result.data?.status || result.status;
        const imageUrl = result.data?.image_url || result.data?.images?.[0] || result.image_url;

        if (status === 'completed' && imageUrl) {
          clearTimeout(timer);
          resolve({ ...result.data, imageUrl });
        } else if (status === 'failed') {
          clearTimeout(timer);
          reject(new Error('Generation failed'));
        } else {
          setTimeout(poll, intervalMs);
        }
      } catch (e) {
        // 网络错误时继续重试，不直接结束
        setTimeout(poll, intervalMs);
      }
    };

    poll();
  });
}

module.exports = { createTask, getTaskResult, pollUntilDone };
