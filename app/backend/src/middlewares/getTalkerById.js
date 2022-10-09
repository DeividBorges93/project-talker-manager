const TALKERS = './talker.json';
const fs = require('fs/promises');

const getTalkerById = async (req, res) => {
  const { id } = req.params;

  const result = await fs.readFile(TALKERS, 'utf-8');
  const data = JSON.parse(result)
    .find((talker) => talker.id === Number(id));

  if (data) return res.status(200).json(data);

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = { getTalkerById };
