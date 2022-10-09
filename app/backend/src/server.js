const cors = require('cors');

const { loginRoutes, talkerRoutes, docAPIRoute } = require('./routes');
const { middlewareError } = require('./middlewares/middlewareError');

const app = require('./api');

app.use(cors());
app.use(loginRoutes, talkerRoutes, docAPIRoute);
app.use(middlewareError);

const PORT = '3000';
app.listen(PORT, () => {
  console.log(`Online in port ${PORT}`);
});
