const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');


const {
    Career, Subject
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        const carrers = await Career.findAll();
        res.status(200).json(carrers);          
    } catch (error) {
        console.log("Error en el GET Carreras", error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        var career = await Career.findByPk(req.params.id);
        var primerAnio;
        var segundoAnio;
        var tercerAnio;
        var cuartoAnio;
        var quintoAnio;
        if(career) {
            const subjects = await Subject.findAll({
                where: {
                    idcarrera : career.idcarrera
                }
            });
            
            var primerAnio = subjects.filter(materia => materia.anio == 1);
            var segundoAnio = subjects.filter(materia => materia.anio == 2); 
            var tercerAnio = subjects.filter(materia => materia.anio == 3);
            var cuartoAnio = subjects.filter(materia => materia.anio == 4);
            var quintoAnio = subjects.filter(materia => materia.anio == 5);

            res.status(200).json({response:'OK', career, primerAnio, segundoAnio, tercerAnio, cuartoAnio, quintoAnio });
        }
        else res.status(404).json({response: 'ERROR', message: 'Empty'});
    } catch (err) {
        error(res, 400, 'Error en el get carreras by id', err);
    }
});


module.exports = router;