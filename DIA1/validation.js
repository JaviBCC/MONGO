let mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    name: {
            type: String,
            enum:["Manolo", "Julian", "Cristina"]
          },


    surname: {
            type: String,
            required: true
            },


    dateofBirth: {
            type: Date,
            validate: [ function(dateofBirth) {
            return dateofBirth >= 2000-01-01;
                    
                },
                    'Fecha de nacimiento no valida'],          
                    select:false
                },
                 
    
    comments: {
            type: String,
            required:false
              },
        
    rol: {
            type: String,
            required:true
         },

});


ProfileSchema.pre('save', function(next) {
    console.log("Middleware de entrada");
    console.log(this.rol.length)

    if (this.rol.length > 3) {
        console.log("Has introducido un rol con mas de 3 caracteres")
        next();
    }else   
        console.log("Solo roles con mas de 3 caracteres ")
});

module.exports = mongoose.model("ProfileValidation", ProfileSchema, "Profile");


