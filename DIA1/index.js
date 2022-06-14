let mongoose = require("mongoose");
let User     = require("./userMDB.js");  

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User({
    login: "Introduce algo por Dios",
    password: "Nolarecuerdo"

});

userDocument.save(checkRespuesta)

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
