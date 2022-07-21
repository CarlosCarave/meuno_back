const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Peticion GET eventos');
});

router.post('/', (req, res) => {
    res.end('Peticion POST eventos');
});

router.put('/', (req, res) => {
    res.end('Peticion PUT eventos');
});

router.delete('/', (req, res) => {
    res.end('Peticion DELETE eventos');
});


module.exports = router;
