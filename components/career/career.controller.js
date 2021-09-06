const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');


const {
    Career
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
        const careers = await Career.findByPk(req.params.id);
        if(careers) res.status(200).json({status:200, message:careers});
        else res.status(200).json({status: 404, message: 'Empty'});
    } catch (err) {
        error(res, 400, 'Error en el get carreras by id', err);
    }
});


module.exports = router;