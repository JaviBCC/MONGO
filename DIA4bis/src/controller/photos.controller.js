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


function getStart(request, response) {
 
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
    next();
}


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


function postPhotos(request, response) 
{
    let myPhoto = new Photo({ name:        request.body.name,           
                              url:         request.body.url,            
                              title:       request.body.title,          
                              description: request.body.description}) 
    
    myPhoto.save()

    .then( (user) => 
    {
        console.log("Photo guardada correctamente")
        console.log(user);
        response.send(user);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
    
}


function putPhotos(request, response) 
{
        let myName          = request.body.name;
        let myDescription   = request.body.description;

        // Photo.updateOne({name: myName, description: myDescription}, 
        //                 {description: "Lo cambio por lo que me da la gana"}, checkRespuesta)

        Photo.updateOne({name: myName}, 
                        {description: myDescription})

        .then( (user) =>
        {
            console.log("Dato Correctamente Modificado")
            console.log(user);
            response.send(user);
            mongoose.disconnect();

        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })  
}


function deletePhotos(request, response) 
{
    
    let myName          = request.body.name;
    let myTitle         = request.body.title;
    let myUrl           = request.body.url;
    let myDescription   = request.body.description;

    if (myName != "" && myTitle != "") { 
 
         Photo.deleteOne({name: myName, title: myTitle})
 
         .then( (user) =>
         {
             console.log("Dato Correctamente Borrado")
             console.log(user);
             response.send(user);
             mongoose.disconnect();
 
         })
 
         .catch( (err) =>
         {
             console.log(err);
             process.exit(-1);
         })
     } 
     else
     {
       if ((myName != "") && (myTitle == "") && (myUrl == "") && (myDescription == "")) {

            Photo.deleteMany({name: myName})

            .then( (user) =>
            {
                console.log("Dato Correctamente Borrado")
                console.log(user);
                response.send(user);
                mongoose.disconnect();
            })
    
            .catch( (err) =>
            {
                console.log(err);
                process.exit(-1);
            })
        }

     }    
 }



module.exports = {getStart, getPhotos, postPhotos, putPhotos, deletePhotos};        



