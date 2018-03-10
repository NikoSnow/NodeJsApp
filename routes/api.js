var express = require('express');
var router = express.Router();
var models = require('../models/index');

//Obtener todos los Estudiantes
router.get('/obtenerEstudiante',function(req,res){
    models.Estudiantes.findAll()
    .then((lista)=>{
        res.json(lista);
    })
    .catch((error)=>{
        res.json(error);
    });
}); 

//Obtener estudiante por ID
router.get('/obtenerEstudiante/:id',function(req,res){
    let idEstudiante = req.params.id;
    models.Estudiantes.find(
            {
                where: {
                    idEstudiante:{
                        [models.Sequelize.Op.eq]: idEstudiante
                    }
                }
            }
        )
        .then((lista)=>{
            res.json(lista);
        })
        .catch((error)=>{
            res.json(error);
        });
});


//Guardar un estudiante
router.post('/guardarEstudiante',function(req,res){
    console.log(req.body);  
    let infoEstudiante = {
        "idEStudiante": req.body.idEstudiante,
        "nombreEstudiante": req.body.nombreEstudiante,
        "edadEstudiante": req.body.edadEstudiante
    };

    models.Estudiantes.create(infoEstudiante)
    .then((nuevoEstudiante,creacion)=>{
        res.json(creacion);
    })
    .catch((error)=>{
        res.json(error);
    });

});

module.exports = router;