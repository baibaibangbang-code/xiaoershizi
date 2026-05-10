const express = require('express');
const router = express.Router();
const { associate } = require('../services/wordAssociator');
const { buildPrompt } = require('../services/promptBuilder');
const { createTask } = require('../services/imageApi');

router.post('/api/generate', async (req, res) => {
  const { theme, title } = req.body;

  if (!theme || !title) {
    return res.status(400).json({ error: 'theme 和 title 均不能为空' });
  }

  try {
    // Step 1: 联想词汇
    const wordBank = associate(theme);

    // Step 2: 填充模板
    const fullPrompt = buildPrompt({ theme, title, wordBank });

    // Step 3: 提交生成任务
    const taskId = await createTask({
      prompt: fullPrompt,
      aspectRatio: '2:3',
      resolution: '2K',
      outputFormat: 'png'
    });

    res.json({ taskId, status: 'submitted' });
  } catch (err) {
    console.error('[generate]', err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/api/status/:taskId', async (req, res) => {
  const { getTaskResult } = require('../services/imageApi');
  try {
    const result = await getTaskResult(req.params.taskId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
