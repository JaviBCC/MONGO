const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

const SubjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [TeachersSchema]
})

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: SubjectsSchema
})

const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksSchema]
})

module.exports = mongoose.model("InfStudent", StudentsSchema, "InfStudent");