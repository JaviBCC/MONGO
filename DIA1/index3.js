let mongoose  = require("mongoose");
let Profile   = require("./profileMDB.js");  

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false})

let profileDocument = new Profile({
    name: "Manolo",
    surname: "El del Bombo",
    dateOfBirth: 2022-11-05,
    Comments: "Se pasa todo el dia dando la paliza con el bombo",
    rol: "user"

});

profileDocument.save(checkRespuesta)

function checkRespuesta(err, res)
{
    if (err)
        console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
        //mongoose.disconnect();
    }


}