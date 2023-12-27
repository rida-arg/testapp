const express = require('express');
const auth = require('../controllers/livreur');
var router = express.Router()
const app = express();


router.post('/livreur/localization',livreur.localLivreur);

module.exports = router;
