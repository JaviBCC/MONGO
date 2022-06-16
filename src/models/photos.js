const {Schema, model} = require("mongoose");

const photosSchema = new Schema(
    {
        name:           String,
        url:            String,
        title:          String,
        description:    String 
    });
    
module.exports = model("Photos", photosSchema, "Photos" )   
