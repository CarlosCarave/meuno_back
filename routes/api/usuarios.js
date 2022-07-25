const router = require('express').Router();

const Usuario = require('../../models/usuario.model');

router.get('/', (req, res) => {
    Usuario.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.post('/', (req, res) => {
    Usuario.create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json({ error: err.message }));
});

router.put('/', (req, res) => {
    res.end('Peticion PUT usuarios');
});

router.delete('/', (req, res) => {
    res.end('Peticion DELETE usuarios');
});


module.exports = router;
