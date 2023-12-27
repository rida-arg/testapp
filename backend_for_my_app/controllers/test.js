const db = require('../models');
//import { tall } from 'tall'

var request = require('request')

var uri = 'https://maps.app.goo.gl/TZBtVx7LQ8MJ9rpE8'
request(
  {
    uri: uri,
    followRedirect: false,
  },
  function(err, httpResponse) {
    if (err) {
      return console.error(err)
    }
    console.log(httpResponse.headers.location)
    coordinates = getCoordinatesFromUrl(httpResponse.headers.location);
            
            // Log the coordinates to the console
            console.log("Latitude: " + coordinates.latitude + ", Longitude: " + coordinates.longitude);
        
  }
)
/*
var googleMapsUrl = "https://www.google.com/maps/place/37.7749,-122.4194";
            
            // Extract latitude and longitude from the URL
            var coordinates = getCoordinatesFromUrl(googleMapsUrl);
            
            // Log the coordinates to the console
            console.log("Latitude: " + coordinates.latitude + ", Longitude: " + coordinates.longitude);
        
*/
        function getCoordinatesFromUrl(url) {
            var regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
            var match = url.match(regex);

            if (match) {
                return {
                    latitude: parseFloat(match[1]),
                    longitude: parseFloat(match[2])
                };
            } else {
                console.error("Invalid Google Maps URL");
                return null;
            }
        }


/*const Co = db.Country;

const contry1 = (req,res,next)=> Co.create({ 
    name: "france",
   
 }).then(data => {
    res.send(data.name);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
});

 module.exports = {contry1}; */