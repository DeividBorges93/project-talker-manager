const express = require('express');
const bodyParser = require('body-parser');

const { getTalkers } = require('./middlewares/getTalkers');
const { getTalkerById } = require('./middlewares/getTalkerById');
const { createLogin } = require('./middlewares/createLogin');
const { createTalker } = require('./middlewares/newTalker');
const { editTalker } = require('./middlewares/editTalker');
const { deleteTalker } = require('./middlewares/deleteTalker');
const { middlewareError } = require('./middlewares/middlewareError');
const { filterByName } = require('./middlewares/filterByName');

const {
  validateToken,
  validateName,
  validateAge,
  validateTalk } = require('./validations/validateTalker');
const {
  validateEmail,
  validatePassword } = require('./validations/validateUser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', validateToken, filterByName);
app.get('/talker', getTalkers);
app.get('/talker/:id', getTalkerById);

app.post('/login', validateEmail, validatePassword, createLogin);
app.post('/talker', validateToken, validateName, validateAge, validateTalk, createTalker);

app.put('/talker/:id', validateToken, validateName, validateAge, validateTalk, editTalker);

app.delete('/talker/:id', validateToken, deleteTalker);

app.use(middlewareError);

app.listen(PORT, () => {
  console.log('Online');
});
