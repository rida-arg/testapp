
//const createServer = require('http');
//const Server = require('socket.io');
const sockets = require('./sockets/socketindex');

const express = require('express');
var router = express.Router()
const app = express();
const db = require('./models');
const route = require('./routers/auth');
var bodyParser = require('body-parser')


const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
sockets.socketIndex(io);

var admin = require("firebase-admin");

var serviceAccount = require("./firebase-message-kley.json");
const { error } = require('console');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const testLocation = async (req,res)=>{
  var latitude = req.body.latitude
  var longitude = req.body.longitude
  console.log('lat is '+latitude+'  lag is'+longitude)
  res.status(200).json({lat : latitude, lag:longitude})
}

const testMethode = async (req,res)=>{
   admin.messaging().send({
     token: req.body.token,
     data: {
       hello: "world",
       name: "rida argane"
     }
   }).then((value) =>{
    res.status(200).json({result:value})
   }).catch((error)=>{
    res.status(200).json({result:error}) 
   });
  }

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json())

router.post('/a',testMethode);
router.post('/notif',testLocation)

app.use('/api',router)
app.use('/test',route)



httpServer.listen(8000,() => console.log('it work !!!'));

/*db.sequelize.sync().then(() => {
 app.listen(8000,()=> console.log('it work !!!'))
})  */
