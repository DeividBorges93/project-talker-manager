const fs = require('fs/promises');

const filterByName = async (req, res) => {
  const { q } = req.query;
  const content = await fs.readFile('./talker.json', 'utf-8');
  const talkers = await JSON.parse(content);
  if (!q) return res.status(200).json(JSON.stringify(talkers));
  if (q !== undefined && q !== '') {
    const talker = talkers.filter(({ name }) =>
      name.toLowerCase().includes(q.toLowerCase()));
    if (talker.length < 1) {
      return res.status(200).json([]);
    }
    return res.status(200).json(talker);
  }
  return res.status(200).json(talkers);
};

module.exports = { filterByName };
