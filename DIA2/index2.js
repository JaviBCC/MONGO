let mongoose = require("mongoose");
let InfStudent   = require("./studentMDB");

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/school', 
                {useNewUrlParser: false, useUnifiedTopology: false})



// function checkRespuesta(err, res) {
//     if (err)
//         console.log("Error: " + err)
//     else {
//         console.log("Documento guardado correctamente")
//         console.log(res)
//         //mongoose.disconnect();
//     }
// }


let studentDocument = new InfStudent({
 
    firstName: "Antonio",
    lastName:   "Gomez",
    marks:      [{date: new Date('2010,10,10'),
                   mark: 6, 
                   subject: {title: "Matematicas",
                             teachers: [{firstName: "Juan",
                                        lastName:   "Martinez",  
                                        groups: ["groups1", "groups2"]}
                                       ]
                            }                   
                 }
                ]                         
});


// let studentDocument2 = new InfStudent({
 
//     firstName: "Carmen",
//     lastName:  "Beltran",
//     marks:      [{date: new Date('2015,05,05'),
//                    mark: 6, 
//                    subject: {title: "Historia",
//                              teachers: [{firstName: "Federico",
//                                         lastName:   "Nosantos",  
//                                         groups: ["groups2", "groups3"]}
//                                        ]
//                             }                   
//                  }
//                 ]                         
// });


// let studentDocument3 = new InfStudent({
 
//     firstName: "Gabriel",
//     lastName:  "Batistuta",
//     marks:      [{date: new Date('2021,07,07'),
//                    mark: 8, 
//                    subject: {title: "Ciencias Naturales",
//                              teachers: [{firstName: "Julian",
//                                         lastName:   "Muñoz",  
//                                         groups: ["groups3", "groups4"]}
//                                        ]
//                             }                   
//                  }
//                 ]                         
// });


// let studentDocument4 = new InfStudent({
 
//     firstName: "Andrea",
//     lastName:  "Pichita",
//     marks:      [{date: new Date('2022,12,11'),
//                    mark: 8, 
//                    subject: {title: "Lenguaje",
//                              teachers: [{firstName: "Alejandro",
//                                         lastName:   "Marquez",  
//                                         groups: ["groups3", "groups4"]}
//                                        ]
//                             }                   
//                  }
//                 ]                         
// });


// studentDocument.save(checkRespuesta)
// studentDocument2.save(checkRespuesta)
// studentDocument3.save(checkRespuesta)
// studentDocument4.save(checkRespuesta)


// InfStudent.findOne({firstName: 'Andrea'},
//         function(err, student)
//         {
//             if (err)
//                 console.log("Error");
//             else
//                 console.log(student);
    
//         })


// InfStudent.findOne({firstName: 'Andrea'},
//         function(err, student)
//         {
//             if (err)
//                 console.log("Error");
//             else
//                 console.log(student.marks[0].subject);
    
//         })


InfStudent.findOne({firstName: 'Andrea'},
    function(err, student)
    {
        if (err)
            console.log("Error");
        else
            console.log(student.marks[0].subject.teachers);

    })











