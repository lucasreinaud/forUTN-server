const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');

const {
    Input,
    RelInputUser
} = require('../../database')


router.post('/', async (req, res) => {
    try {
        //archivos => [4,3,5,6]
        const { identradapadre, idusuario, idcarrera, contenido, archivos } = req.body;
        console.log(req.body);
        const inputCreated = await Input.create({
            idusuario,
            idcarrera,
            identradapadre,
            contenido,
            });
        archivos.forEach(async id => {
            console.log(id);
            await RelInputUser.create({
                idarchivo : id,
                identrada : inputCreated.identrada,
                });
        })
        res.status(200).json({
            status: 200,
            message:'Publicacion creada',
        });          
    } catch (e) {
        error(res,400,'error en el post input', e)
    }
});


module.exports = router;