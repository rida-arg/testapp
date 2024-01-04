const db = require('../models');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const restaurant = db.Restaurant;
const livreur = db.Livreur;
//const secretKey = 'kasopozep8564ààr'
// name	email	password	phone	latitude	longitude , city
const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone:Joi.string().min(10).required(),
    password: Joi.string().min(5).required(),
    repeat_password: Joi.ref('password')
});
const schemalivreur = Joi.object({
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  email: Joi.string().email().required(),
  phone:Joi.string().min(10).required(),
  password: Joi.string().min(5).required(),
  repeat_password: Joi.ref('password')
}) 

exports.regestRestaurant = (req,res) =>{ 
       let rest = new Promise((resolve,reject)=>{
        let validation = schema.validate({name:req.body.name,email:req.body.email,phone:req.body.phone,
            password:req.body.password,repeat_password:req.body.repeat})
       if(validation.error){
            reject(validation.error.details[0].message);
       }else{ restaurant.count({ where: { email:req.body.email }}).then(result =>{
            if(result > 0){
                console.log("email = "+req.body.email +"dija kayn")
                reject('this email exist')
            }else{
                restaurant.count({ where: { phone:req.body.phone }}).then(result =>{
                if(result > 0){
                        console.log("tel = "+req.body.phone +"dija kayn")
                        reject('this phone exist') 
                }else{
                    console.log("alors")
                    bcrypt.hash(req.body.password,10).then(pw=>{
                    restaurant.create({
                       name: req.body.name,
                       email:req.body.email,
                       phone:req.body.phone,
                       password:pw,
    
                    }).then((response)=>resolve(response))
                   .catch((err)=>reject(err));
                   })
                }
                }).catch((err)=>reject(err));
            }
          }).catch((err)=>reject(err))
        };
        }) 

      rest.then(result =>{
        console.log(result)
        res.status(200).json(result)
      }).catch(err =>{
        console.log(err)
        res.status(200).json(err)
    })
    
 }

 exports.loginRestaurant = async (req,res)=>{
    const rest = await restaurant.findOne({ where : {email : req.body.email }});
    if(rest){
       const password_valid = await bcrypt.compare(req.body.password,rest.password);
       if(password_valid){
           token = jwt.sign({ "id" : rest.id,"email" : rest.email,"name":rest.name },process.env.secretKey);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password or Email Incorrect" });
       }
     
     }else{
       res.status(404).json({ error : "Password or Email Incorrect" });
     }
 }







 exports.regestLivreur = (req,res) =>{ 
  let rest = new Promise((resolve,reject)=>{
   let validation = schemalivreur.validate({nom:req.body.nom,prenom:req.body.prenom,email:req.body.email,phone:req.body.phone,
       password:req.body.password,repeat_password:req.body.repeat})
  if(validation.error){
       reject(validation.error.details[0].message);
  }else{ livreur.count({ where: { email:req.body.email }}).then(result =>{
       if(result > 0){
           console.log("email = "+req.body.email +"dija kayn")
           reject('this email exist')
       }else{
           livreur.count({ where: { phone:req.body.phone }}).then(result =>{
           if(result > 0){
                   console.log("tel = "+req.body.phone +"dija kayn")
                   reject('this phone exist') 
           }else{
               console.log("alors")
               bcrypt.hash(req.body.password,10).then(pw=>{
               livreur.create({
                  nom: req.body.nom,
                  prenom: req.body.prenom,
                  email:req.body.email,
                  phone:req.body.phone,
                  password:pw,

               }).then((response)=>resolve(response))
              .catch((err)=>reject(err));
              })
           }
           }).catch((err)=>reject(err));
       }
     }).catch((err)=>reject(err))
   };
   }) 

 rest.then(result =>{
   console.log(result)
   res.status(200).json(result)
 }).catch(err =>{
   console.log(err)
   res.status(200).json(err)
})

}




exports.loginLivreur = async (req,res)=>{
  const rest = await livreur.findOne({ where : {email : req.body.email }});
  if(rest){
     const password_valid = await bcrypt.compare(req.body.password,rest.password);
     if(password_valid){
         token = jwt.sign({ "id" : rest.id,"email" : rest.email,"name":rest.name },process.env.secretKey);
         res.status(200).json({ token : token });
     } else {
       res.status(400).json({ error : "Password or Email Incorrect" });
     }
   
   }else{
     res.status(404).json({ error : "Password or Email Incorrect" });
   }
}


