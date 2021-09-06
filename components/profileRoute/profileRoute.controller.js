const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    ProfileRoute
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("ProfileRoute");
        const profileRoutes = await ProfileRoute.findAll(); 
        res.status(200).json(profileRoutes);  
    } catch (error) {
        console.log("Error en el GET ProfileRoute", error);
    }
});


module.exports = router;