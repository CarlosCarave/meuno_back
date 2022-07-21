const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Respuesta genérica');
 });

router.get('/new', (req, res) => {
    res.end('Respuesta genérica');
 });

router.get('/edit', (req, res) => {
    res.end('Respuesta genérica');
 });

router.get('/delete', (req, res) => {
    res.end('Respuesta genérica');
 });

router.post('/create', (req, res) => {
    res.end('Respuesta genérica');
 });

router.post('/update', (req, res) => {
    res.end('Respuesta genérica');
 });




module.exports = router;