const TALKERS = './talker.json';
const fs = require('fs/promises');

const editTalker = async (req, res) => {
  fs.readFile(TALKERS, 'utf-8')
    .then((data) => {
      const talkerList = JSON.parse(data);
      const { name, age, talk: { watchedAt, rate } } = req.body;
      const { id } = req.params;
      const talkerChange = {
        id: Number(id),
        name,
        age,
        talk: { watchedAt, rate },
      };
      const talkers = talkerList.filter((talker) => talker.id !== Number(id));
      fs.writeFile(TALKERS, JSON.stringify([...talkers, talkerChange]), 'utf-8');
      return res.status(200).json(talkerChange);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = { editTalker };
