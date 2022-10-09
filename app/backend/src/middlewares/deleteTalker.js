const TALKERS = './talker.json';
const fs = require('fs/promises');

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await fs.readFile(TALKERS, 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkerByIndex = parsedTalkers.findIndex((talker) => talker.id === id);
    const excludeTalker = parsedTalkers.splice(talkerByIndex, 1)[0];
    const strinfiedTalkers = JSON.stringify(excludeTalker, null, 2);
    await fs.writeFile(TALKERS, strinfiedTalkers);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  deleteTalker,
};
