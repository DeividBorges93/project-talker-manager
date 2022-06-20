const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  if (token.length !== 16) return res.status(401).json({ message: 'Token inválido' });

  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (+age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const validateWatchedAt = (watchedAt) => {
  const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  const REQUIRED_FIELD = 'O campo "watchedAt" é obrigatório';
  const CORRECT_FORMAT = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  if (!watchedAt) {
      return { message: REQUIRED_FIELD };
    }
    if (!watchedAt.match(regexDate)) {
      return { message: CORRECT_FORMAT };
    }
  return null;
};
