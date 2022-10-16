const { Router } = require('express');
const router = Router();

const { createLogin } = require('../middlewares/createLogin');
const { validateEmail, validatePassword } = require('../validations/validateUser');

router.post('/login', validateEmail, validatePassword, createLogin);

module.exports = router;