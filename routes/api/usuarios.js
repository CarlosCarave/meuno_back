const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Peticion GET usuarios');
 });

router.post('/', (req, res) => {
    res.end('Peticion POST usuarios');
 });

router.put('/', (req, res) => {
    res.end('Peticion PUT usuarios');
 });

router.delete('/', (req, res) => {
    res.end('Peticion DELETE usuarios');
 });


module.exports = router;
