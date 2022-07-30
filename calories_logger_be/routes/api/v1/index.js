const express = require('express');
const router = express.Router();

const { authorizer } = require('./middlewares/authorizer');
const { jwtAuthorizer } = require('./middlewares/jwtAuthorizer');

const usuariosRoutes = require('./security');
const caloriasRoutes = require('./calorias');

router.use('/security', authorizer ,usuariosRoutes);
router.use('/calorias', authorizer,jwtAuthorizer ,caloriasRoutes);

module.exports = router;