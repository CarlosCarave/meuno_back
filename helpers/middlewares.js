const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const Usuario = require('../models/usuario.model')




const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ error: 'El token no está en la cabecera' });
    }

    const token = req.headers['authorization'];

    let obj;
    
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.json({ error: 'El token esta malamente' });
    }

    console.log(obj.expDate, dayjs().unix());

    if (dayjs().unix() > obj.expDate) {
        return res.json({ error: 'El token esta caducado' });
    }
    const user = await Usuario.getById(obj.userId);
    req.user = user;

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ error: 'No eres admin. Fuera' })
    }
    next();
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.json({ error: ('No tienes permisos') })
        }
        next();
    }
}

module.exports = { checkToken, checkAdmin, checkRole };