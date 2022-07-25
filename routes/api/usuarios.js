const router = require('express').Router();

const Usuario = require('../../models/usuario.model');

router.get('/', (req, res) => {
    Usuario.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.post('/', async (req, res) => {
    const result = await Usuario.create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json({ error: err.message }));
});

router.put('/', (req, res) => {
    res.end('Peticion PUT usuarios');
});

router.delete('/:usuarioId', (req, res) => {
    Usuario.deleteById(req.params.usuarioId)
        .then(result => {
            res.json({ success: 'Se ha borrado el usuario' });
        })
        .catch(err => res.json({ error: err.message }));
});


module.exports = router;
