const TALKERS = './talker.json';
const fs = require('fs/promises');

const getTalkers = async (_req, res) => {
  const result = await fs.readFile(TALKERS, 'utf-8');
  const data = JSON.parse(result);
  return res.status(200).json(data);
};

module.exports = { getTalkers };
