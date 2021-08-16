const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    User
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("usuarios");
        const usuarios = await User.findAll(); 
        res.status(200).json(usuarios);  
    } catch (error) {
        console.log("Error en el GET USUARIOS");
    }
});


module.exports = router;