const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Log
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("Logs");
        const logs = await Log.findAll(); 
        res.status(200).json(logs);  
    } catch (error) {
        console.log("Error en el GET Log", error);
    }
});


module.exports = router;