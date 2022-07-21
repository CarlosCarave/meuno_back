const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');    
const apiEventosRouter = require('./api/eventos');


router.use('/usuarios', apiUsuariosRouter);
router.use('/eventos', apiEventosRouter);


module.exports = router;