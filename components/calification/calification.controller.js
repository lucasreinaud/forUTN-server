const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Calification
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("calificaciones");
        const califications = await Calification.findAll(); 
        res.status(200).json(califications);  
    } catch (error) {
        console.log("Error en el GET CALIFICACIONES", error);
    }
});


module.exports = router;