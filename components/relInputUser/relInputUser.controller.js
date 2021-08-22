const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    RelInputUser
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("RelInputUser");
        const profileRoutes = await RelInputUser.findAll(); 
        res.status(200).json(profileRoutes);  
    } catch (error) {
        console.log("Error en el GET RelInputUser", error);
    }
});


module.exports = router;