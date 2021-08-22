const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Career
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("carreras");
        const carrers = await Career.findAll(); 
        res.status(200).json(carrers);  
    } catch (error) {
        console.log("Error en el GET Carreras", error);
    }
});


module.exports = router;