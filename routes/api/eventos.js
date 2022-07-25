const router = require('express').Router();

const Evento = require('../../models/evento.model');

/*router.get('/', (req, res) => {
    Evento.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
}); */

router.get('/', async (req, res) => {
    try {
        const result = await Evento.getAll()
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    } 
});

router.post('/', (req, res) => {
    Evento.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.put('/', (req, res) => {
    res.end('Peticion PUT eventos');
});

router.delete('/', (req, res) => {
    res.end('Peticion DELETE eventos');
});


module.exports = router;
