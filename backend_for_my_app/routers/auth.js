const express = require('express');
const auth = require('../controllers/auth');
var router = express.Router()
const app = express();

router.post('/restaurant',auth.regestRestaurant);
router.post('/login/restaurant',auth.loginRestaurant);
router.post('/livreur',auth.regestLivreur);
router.post('/login/livreur',auth.loginLivreur);



router.get('/a',(req,res)=>{
   // let ab = req.body.test
    res.status(200).json({name : "connection run"})
});

module.exports = router;