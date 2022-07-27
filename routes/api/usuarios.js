const router = require('express').Router();

const Usuario = require('../../models/usuario.model');

const bcrypt = require('bcrypt');

const { createToken } = require('../../helpers/utilidades');

const { checkToken } = require('../../helpers/middlewares');

const { getEventosUser } = require('../../models/usuario.model')

router.get('/', (req, res) => {
    Usuario.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

/* router.post('/', async (req, res) => {
    const result = await Usuario.create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json({ error: err.message }));
}); */

router.put('/:usuarioId', (req, res) => {
    const { usuarioId } = req.params;
    Usuario.update(usuarioId, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
});

router.delete('/:usuarioId', (req, res) => {
    Usuario.deleteById(req.params.usuarioId)
        .then(result => {
            res.json({ success: 'Se ha borrado el usuario' });
        })
        .catch(err => res.json({ error: err.message }));
});

//REGISTRO USUARIO

router.post('/registro',
    async (req, res) => {

        try {

            //encriptar la password
            req.body.password = bcrypt.hashSync(req.body.password, 12);

            const result = await Usuario.create(req.body);
            console.log(result);
            res.json(result);
        } catch (err) {
            res.json({ error: err.message })
        }
    });

// LOGIN USUARIO

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Usuario.getByUsername(username);
    console.log(user)
    if (!user) {
        return res.json({ error: 'usuario y/o constraseña incorrectos' });
    }

    const iguales = bcrypt.compareSync(password, user.password);

    if (!iguales) {
        return res.json({ error: 'Usuario y/o contraseña incorrectos2' });
    }
    res.json({
        success: 'Login correcto',
        token: createToken(user)
    });


});

router.get('/usuario/data', checkToken, (req, res) => {
    res.json(req.user);
});

router.get('/eventos/usuario', checkToken, (req, res) => {
    Usuario.getEventosUser(req.user)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
})

module.exports = router;
