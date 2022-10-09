const TALKERS = './talker.json';
const fs = require('fs/promises');

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;

  const result = await fs.readFile(TALKERS, 'utf-8');
  const data = JSON.parse(result);

  const newTalker = { id: data.length + 1, name, age, talk };

  data.push(newTalker);

  await fs.writeFile(TALKERS, JSON.stringify(data));

  return res.status(201).json(newTalker);
};

module.exports = { createTalker };
