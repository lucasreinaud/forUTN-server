const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');


const {
     Subject
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.status(200).json(subjects);          
    } catch (error) {
        error(res, 400, 'Error en el get materias', err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        var subject = await Subject.findByPk(req.params.id);
        if(subject) {
            const inputs = await Subject.findAll({
                where: {
                    idmateria : subject.idmateria
                }
            })
            console.log(inputs)
            subject["inputs"] = inputs;
            res.status(200).json({response:'OK', subject, inputs});
        }
        else res.status(404).json({response: 'ERROR', message: 'Empty'});
    } catch (err) {
        error(res, 400, 'Error en el get materias by id', err);
    }
});


module.exports = router;