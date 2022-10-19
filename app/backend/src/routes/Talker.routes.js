const { Router } = require('express');
const router = Router();

const { getTalkers } = require('../middlewares/getTalkers');
const { getTalkerById } = require('../middlewares/getTalkerById');
const { filterByName } = require('../middlewares/filterByName');
const { deleteTalker } = require('../middlewares/deleteTalker');
const { createTalker } = require('../middlewares/newTalker');
const { editTalker } = require('../middlewares/editTalker');
const { validateToken, validateName, validateAge, validateTalk } = require('../validations/validateTalker');


router.get('/talker', getTalkers);
router.post('/talker', validateToken, validateName, validateAge, validateTalk, createTalker);

router.get('/talker/search', validateToken, filterByName);

router.get('/talker/:id', validateToken, getTalkerById);
router.put('/talker/:id', validateToken, validateName, validateAge, validateTalk, editTalker);
router.delete('/talker/:id', validateToken, deleteTalker);

module.exports = router;