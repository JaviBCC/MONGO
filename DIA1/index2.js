let mongoose       = require("mongoose");
let Creedentials   = require("./creedentialsMDB.js");  

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false})

let creedentialsDocument = new Creedentials({
    address: "Calle de Pernambuco 45",
    phone: "679345767",
    email: "miprimeremailchispas@gmail.com"

});

creedentialsDocument.save(checkRespuesta)

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