const { Router } = require('express');
const router = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('../../swagger.json');

router.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerJson))

module.exports = router;