SECRET='scsdkl85448'

const db = require('../models');
const livreur = db.Livreur;

exports.localLivreur = async (req,res)=>{
    const rest = await livreur.update({latitude: req.body.latitude},
        { where : {id : req.body.id }});
    if(rest){
       
           res.status(200).json({ msg : 'success' });
     
     }else{
       res.status(404).json({ error : "incorrect request" });
     }
 }
