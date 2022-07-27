const router = require('express').Router();

const Usuario = require('../../models/usuario.model');

const bcrypt = require('bcrypt');

const { body, validationResult } = require('express-validator')

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
    const { email, password } = req.body;

    const user = await Usuario.getByEmail(email);
    if (!user) {
        return res.json({ error: 'Email y/o constraseña incorrectos' });
    }

    const iguales = bcrypt.compareSync(password, user.password);

    if (!iguales) {
        return res.json({ error: 'Email y/o contraseña incorrectos2' });
    }
    res.json({
        success: 'Login correcto',
        token: createToken(user)
    });


});

module.exports = router;
