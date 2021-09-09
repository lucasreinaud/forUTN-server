const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    Calification,
    Input
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("calificaciones");
        const califications = await Calification.findAll(); 
        res.status(200).json(califications);  
    } catch (error) {
        error(res,400,'error en el get  calification', e)    }
});

//Calificaciones por id publicacion
router.get('/:id', async (req, res) => {
    try {
        console.log("calificaciones");
        const califications = await Calification.findAll({
            where: {
                identrada : req.params.id
            }
        }); 
        res.status(200).json(califications);  
    } catch (error) {
        error(res,400,'error en el get calification by id', e)
    }
});


router.post('/', async (req, res) => {
    try {
        const { identrada, idusuario, tipoclasificacion } = req.body;
        const inputCreated = await Input.create({
            identrada,
            idusuario,
            tipoclasificacion
            });

        res.status(200).json({
            response: 'OK',
            message:'Calificacion creada',
        });          
    } catch (e) {
        error(res,400,'error en el post calification', e)
    }
});


module.exports = router;