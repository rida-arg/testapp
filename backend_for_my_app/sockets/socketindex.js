exports.socketIndex = (io) => {

  //  const nameSpaceOrders = io.of('/orders-delivery-socket');
  var clients =[];
    io.on('connection', socket => {
       
        socket.on('storeClientInfo', function (data) {

            var clientInfo = new Object();
            clientInfo.customId = data.customId;
            clientInfo.clientId = socket.id;
            clients.push(clientInfo);
        });

        socket.on('locationUpdate', function (data) {
           console.log(data)
        });

        socket.on('disconnect', function (data) {

            for( var i=0, len=clients.length; i<len; ++i ){
                var c = clients[i];

                if(c.clientId == socket.id){
                    clients.splice(i,1);
                    break;
                }
            }

        });
        
        console.log('USER CONECTED YES ',socket.id);

        socket.on('msg',data =>{
            console.log(data);
            for( var i=0, len=clients.length; i<len; ++i ){
                var c = clients[i];
                if(c.customId == data.customId){
                    io.to(c.clientId).emit('chof',data.message)                    ;
                    break;
                }
            }
        })
        

     /*   socket.on('position', (data) => {

            // console.log(`DATA FLUTTER ${JSON.stringify(data)}`);

            nameSpaceOrders.emit(`position/${data.idOrder}`, { latitude: data.latitude, longitude: data.longitude });
            
        });

        socket.on('disconnect', (data) => {
            console.log('USER DISCONNECT');
        });   */

    });

} 