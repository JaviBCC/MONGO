let mongoose   = require("mongoose");
let InfMarks   = require("./marksMDB");

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/school', 
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



// EJEMPLO DE CREACION YA QUE SE PERDIO EL ORIGINAL YA INSERTADO EN MONGO COMPASS

// // let infDocument = new InfMarks({
//     date: new Date("2022, 06, 15"),
//     mark: 8,
//     student_first_name: "Kakashi",
//     student_last_name: "Hatake",
//     group_name: "Grupo 1",
//     subject_name: "Javascript",
//     teachers: [
//         {
//             teacher_first_name: "Jiraiya",
//             teacher_last_name: "Sempai"
//         },
//         {
//             teacher_first_name: "Minato",
//             teacher_last_name: "Namikaze"
//         }
//     ]
// // });


// InfMarks
// .insertMany([infDocument1, infDocument2], checkRespuesta)
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



// -- Calcular la nota media de los alumnos de una asignatura concreta. //

// InfMarks
// .aggregate([{$match: {subject_name: "Matematicas"}}, 
//             {$group: {"_id": {"Asignatura": "$subject_name"}, "Nota Media": {"$avg": "$mark"}}}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos. //

// InfMarks
// .aggregate([{$count: "Numero Total de Alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos. //

// InfMarks
// .aggregate([{$project: {"Nombre":   "$student_first_name",
//                         "Apellido": "$student_last_name",
//                         _id: 0}
// }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Listar el nombre y los apellidos de todos los profesores incluyendo repetidos. //

// InfMarks  
// .aggregate([{$unwind: "$teachers"}, 
//             {$project: {"Nombre Profesor": "$teachers.teacher_first_name", 
//                         "Apellido Profesor": "$teachers.teacher_last_name",_id: 0}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto. //

// InfMarks
// .aggregate([{$group: {"_id": {"Grupo": "$group_name"}, 
//                               "Cantidad": {"$sum": 1}}}, 
//                              {$sort: {"_id": -1}} ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// -- Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5. //

// InfMarks
// .aggregate([{$group: {"_id": {"Asignatura": "$subject_name"}, 
//                       "Media": {"$avg": "$mark"}}}, 
//                      {$match: {"Media": {"$gt": 5}}}, 
//                      {$sort: {"Media": -1}},
//                      {$limit: 5} ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos. //

// InfMarks
// .aggregate([{$unwind: "$teachers"}, 
//             {$group: {"_id": {"Asignatura": "$subject_name"}, 
//              "Cantidad": {"$sum": 1}}} ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota 
//    tenga fecha del año pasado o anterior.

// InfMarks
// .aggregate([{$match: {"$or": [{"mark": {"$gt": 8}}, 
//                               {"date": {"$lt": new Date('2022, 01, 01')}}
//                              ]}},

//             {$project: {"Nombre Alumno":   "$student_first_name", 
//                         "Apellido Alumno": "$student_last_name",
//                         "Nota":            "$mark",
//                         "_id": 0}
//             }])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Obtén la media de las notas que se han dado en el último año por asignatura. //

// InfMarks 
// .aggregate([{$match: {"$and":[{date: {"$gte": new Date('2021,01,01')}},
//                               {date: {"$lt":  new Date('2022,01,01')}}] }},

//             {$group: {"_id": {"Asignatura": "$subject_name"},  "Nota Media": {"$avg": "$mark"}}},
//           ])


// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno. //

// InfMarks
// .aggregate([{$match: {"$and":[{date: {"$gte": new Date('2021,01,01')}},
//                               {date: {"$lt":  new Date('2022,01,01')}}] }},

//             {$group: {"_id": {"Nombre Alumno": "$student_first_name"},  "Nota Media": {"$avg": "$mark"}}},
//           ])


// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// -- Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
//    sea uno que elijáis.

// InfMarks
// .aggregate([{$unwind:"$teachers"},
//             {$match: {"teachers.teacher_first_name": "Chiquito", "teachers.teacher_last_name": "De la calzada"}},
//             {$group: {"_id": {"Nombre Alumno": "$student_first_name"}, "Cantidad": {"$sum": 1}}}
//            ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//// Como me gusta mongo!!! Disfruto mucho con el!!! :-)