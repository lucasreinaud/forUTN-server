const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Profile
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("Profile");
        const profiles = await Profile.findAll(); 
        res.status(200).json(profiles);  
    } catch (error) {
        console.log("Error en el GET Profile", error);
    }
});


module.exports = router;