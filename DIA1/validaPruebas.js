let mongoose = require("mongoose");
let Profile  = require("./validation");

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/codenotch', 
                {useNewUrlParser: false, useUnifiedTopology: false});

let profileDocument = new Profile({
    name:           "Cristina",
    surname:        "Diaz",
    dateOfBirth:    1945-05-05,
    Comments:       "Menuda pájara la Cristina ahora que no me oye", 
    rol:            "mas"

});

profileDocument.save(checkRespuesta)
function checkRespuesta(err, res) {

    if(err) {
        console.log("Error: " + err);
    }else{
        console.log("Datos Profile Guardados.");
        console.log(res);
    }
};