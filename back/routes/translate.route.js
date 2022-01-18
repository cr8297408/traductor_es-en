const express = require('express');
const {traducir, hello} = require('../controllers/translate.controller');

const router = express();

// hello world
router.get('/', hello);

// ruta de traducción español a ingles
router.post('/', traducir);

module.exports = router;