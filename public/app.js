const generateBtn = document.getElementById('generateBtn');
const themeInput = document.getElementById('theme');
const titleInput = document.getElementById('title');
const statusDiv = document.getElementById('status');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', async () => {
  const theme = themeInput.value.trim();
  const title = titleInput.value.trim();

  if (!theme || !title) {
    statusDiv.textContent = '请填写主题和标题';
    statusDiv.className = 'status-msg error';
    return;
  }

  generateBtn.disabled = true;
  statusDiv.textContent = '正在生成...';
  statusDiv.className = 'status-msg';
  resultDiv.innerHTML = '';

  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme, title })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || '提交失败');
    }

    statusDiv.textContent = '任务已提交，等待图片生成...';
    await pollStatus(data.taskId);

  } catch (err) {
    statusDiv.textContent = '错误: ' + err.message;
    statusDiv.className = 'status-msg error';
  } finally {
    generateBtn.disabled = false;
  }
});

async function pollStatus(taskId) {
  const maxAttempts = 80;
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      const res = await fetch(`/api/status/${taskId}`);
      const data = await res.json();

      const apiCode = data.code ?? (res.ok ? 200 : res.status);
      const taskState = data.data?.state ?? data.data?.status;
      const failCode = data.data?.failCode;

      if (failCode || taskState === 'failed') {
        throw new Error('图片生成失败: ' + (data.data?.failMsg || failCode));
      }

      if (apiCode === 200 && taskState === 'success') {
        let imageUrl = null;
        if (data.data.resultJson) {
          try {
            const result = JSON.parse(data.data.resultJson);
            imageUrl = result.resultUrls?.[0] || result.image_url || result.images?.[0] || result.output_url;
          } catch {
            imageUrl = null;
          }
        }
        if (imageUrl) {
          statusDiv.textContent = '生成完成！';
          resultDiv.innerHTML = `<img src="${imageUrl}" alt="生成的小报" />`;
          return;
        }
      }
    } catch (err) {
      statusDiv.textContent = '错误: ' + err.message;
      return;
    }

    attempts++;
    statusDiv.textContent = `生成中... (${attempts}/${maxAttempts})，请稍候`;
    await sleep(15000);
  }

  statusDiv.textContent = '生成超时，请重试';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
