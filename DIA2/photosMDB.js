const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const photosSchema = new mongoose.Schema({

    name:           String,
    url:            String,
    title:          String,
    description:    String 

});

module.exports = mongoose.model("Photos", photosSchema, "Photos" )




