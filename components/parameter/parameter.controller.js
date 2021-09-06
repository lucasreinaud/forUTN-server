const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Parameter
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("Parameter");
        const parameters = await Parameter.findAll(); 
        res.status(200).json(parameters);  
    } catch (error) {
        console.log("Error en el GET Parameter", error);
    }
});


module.exports = router;