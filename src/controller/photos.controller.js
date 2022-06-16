let Photo    = require("../models/photos");
const connection = require("../database")
const mongoose = require('mongoose')


function checkRespuesta(err, res) {
    if (err)
        console.log("Error: " + err)
    else {
        console.log("Documento guardado correctamente")
        console.log(res)
        //mongoose.disconnect();
    }
}


// function getStart(request, response) {
 
//     let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
//     response.send(respuesta);
//     next();
// }


function getPhotos(request, response)
{
    
   if (request.params.id == null) {

        Photo.find({})

        .then( (user) =>
        {
            console.log(user);
            response.send(user)

        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    } 
    else
    {
        Photo.findOne({name: request.params.id})
        .then( (user) =>
        {
            console.log(user);
            response.send(user)
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }    
}


module.exports = {getPhotos};        






 
