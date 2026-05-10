const { getWordBank } = require('../prompts/word-bank');

function associate(theme) {
  const bank = getWordBank(theme);
  return {
    roles: bank.roles,
    items: bank.items,
    environment: bank.environment
  };
}

module.exports = { associate };
