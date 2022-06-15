let mongoose = require("mongoose");
let Photos   = require("./photosMDB");

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/codenotch', 
                {useNewUrlParser: false, useUnifiedTopology: false})

function checkRespuesta(err, res) {
    if (err)
        console.log("Error: " + err)
    else {
        console.log("Documento guardado correctamente")
        console.log(res)
        //mongoose.disconnect();
    }
}
            
// let photosDocument = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Coliseo Romano",
//     description:    "Bonito paisaje de la antigua Roma" 

// });

// let photosDocument2 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Acuducto Segovia",
//     description:    "Espectacular acueducto de la epoca romana" 

// });

// let photosDocument3 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Torre del oro",
//     description:    "Preciosa construccion en el corazon de Sevilla" 

// });

// let photosDocument4 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Estatua Cibeles",
//     description:    "Lugar emblemático de Madrid, lugar de celebración futbolera" 

// });

// let photosDocument5 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "La Sagrada Familia",
//     description:    "Espectacular construcción en el corazón de Barcelona" 

// });

// let photosDocument6 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Estatua Neptuno",
//     description:    "Lugar emblemático de Madrid, lugar de celebración futbolera" 

// });

// let photosDocument7 = new Photos({
//     name:           "Menganito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Museo del Prado",
//     description:    "Espectacular construcción y museo en el corazón de Madrid" 

// });

// let photosDocument8 = new Photos({
//     name:           "Fulanito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Estatua Neptuno",
//     description:    "Lugar emblemático de Madrid, lugar de celebración futbolera" 

// });

// let photosDocument9 = new Photos({
//     name:           "Jaimito",           
//     url:            "http://www.paisajesdelmundo.com",            
//     title:          "Museo del Prado",
//     description:    "Espectacular construcción y museo en el corazón de Madrid" 

// });


// photosDocument.save(checkRespuesta)
// photosDocument2.save(checkRespuesta)
// photosDocument3.save(checkRespuesta)
// photosDocument4.save(checkRespuesta)
// photosDocument5.save(checkRespuesta)


// Photos.insertMany([photosDocument6, photosDocument7], checkRespuesta)
//     function checkRespuesta(err, res)
//     {
//         if (err)
//             console.log("Error: " + err)
//         else
//         {
//             console.log("Documento guardado correctamente")
//             console.log(res)
//             //mongoose.disconnect();
//         }
//     }


// Photos.insertMany([photosDocument8, photosDocument9], checkRespuesta)

//     function checkRespuesta(err, res)
//     {
//         if (err)
//             console.log("Error: " + err)
//         else
//         {
//             console.log("Documento guardado correctamente")
//             console.log(res)
//             //mongoose.disconnect();
//         }
//     }


// Photos.find({name: "Menganito"},
//         function(err, user)
//         {
//             if (err)
//                 console.log("Error");
//             else
//                 console.log(user);
//         })


// Photos.updateOne({title: "Estatua Neptuno"}, {description: "Fuente emblemática de Madrid"}, checkRespuesta) ;

// Photos.deleteOne({name: "Menganito", title: "Acuducto Segovia"},
//     function(err)
//     {
//         if (err)
//             console.log("Error");
//         else
//         {
//             console.log("Correctamente Borrado");
//             mongoose.disconnect();
//         }
//     }) 
    
Photos.deleteMany({name: "Menganito"},
    function(err, datos)
    {
        if (err)
            console.log("Error");
        else
        {
            console.log("Correctamente Borrado");
            console.log(datos)
            mongoose.disconnect();
        }
    })
    

















