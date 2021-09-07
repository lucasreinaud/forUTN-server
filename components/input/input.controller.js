const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');

const {
    Input,
    RelInputUser,
    File
} = require('../../database');

router.get('/', async (req, res) => {
    try {
        console.log("Entradas");
        const inputs = await Input.findAll(); 
        res.status(200).json(inputs);  
    } catch (error) {
        console.log("Error en el GET USUARIOS",error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        var inputs = await Input.findByPk(req.params.id);
        let coments = [];
        let urlFiles = [];
        let relFiles = [];
        if(inputs) {
            if(inputs.identradapadre == 0)
            {
                const comentarios = await Input.findAll({
                    attributes:['contenido', 'idusuario'],
                    where: {
                        identradapadre: inputs.identrada
                    }
                });

                comentarios.forEach( a => {
                    coments.push({
                        contenido : a.contenido,
                        usuario: a.idusuario
                    });
                });

                const relEntradaArchivos = await RelInputUser.findAll({
                    where: {
                        identrada: inputs.identrada
                    }
                });

                relEntradaArchivos.forEach(a => {
                    relFiles.push(a.idarchivo);
                });
                const files = await File.findAll({
                    where:{
                        idarchivo: relFiles
                    }
                });
                files.forEach( a => {
                    urlFiles.push(a.urlfile);
                })
            }
            res.status(200).json({status:200, message:inputs, comentarios: coments, archivos: urlFiles});
        }
        else res.status(200).json({status: 404, message: 'Empty'});
    } catch (err) {
        console.log(err);
        error(res, 400, 'Error en el get inputs by id', err);
    }
});






router.post('/', async (req, res) => {
    try {
        //archivos => [4,3,5,6]
        const { identradapadre, idusuario, idcarrera, contenido, archivos } = req.body;
        const inputCreated = await Input.create({
            idusuario,
            idcarrera,
            identradapadre,
            contenido,
            });
        archivos.forEach(async id => {
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