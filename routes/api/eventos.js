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

router.put('/:eventoId', (req, res) => {
    const { eventoId } = req.params;
    Evento.update(eventoId, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
});

router.delete('/:eventoId', (req, res) => {
    Evento.deleteById(req.params.eventoId)
        .then(result => {
            res.json({ success: 'Se ha borrado el evento' });
        })
        .catch(err => res.json({ error: err.message }));
});

router.get('/:eventoId', (req,res) => {
    Evento.getById(req.params.eventoId)
    .then(result => {
        res.json({ success: 'Se ha obtenido un evento'});
    })
    .catch(err => res.json({ error: err.message}) )
})


module.exports = router;
