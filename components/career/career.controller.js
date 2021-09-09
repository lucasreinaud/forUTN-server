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
        if(career) {
            const subjects = Subject.findAll({
                where: {
                    idcarrera : career.idcarrera
                }
            })
            career["subjects"] = subjects;
            res.status(200).json({status:200, message:career});
        }
        else res.status(404).json({status: 'ERROR', message: 'Empty'});
    } catch (err) {
        error(res, 400, 'Error en el get carreras by id', err);
    }
});


module.exports = router;