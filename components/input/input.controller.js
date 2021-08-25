const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const error = require('../../bin/error');

const {
    Input,
    File,
    RelInputUser
} = require('../../database')


router.post('/', async (req, res) => {
    try {
        console.log(req);
        const { identradapadre, idusuario, idcarrera, contenido, archivos } = req.body;
        
        const inputCreated = await Input.create({
            idusuario,
            idcarrera,
            identradapadre,
            contenido,
            });

        if(req.files)
        {
            const files = await uploadFilesToAzure(req.files);
            const fileCreated = await File.create({
                urlfile: files[0].urlFile
            });

            const relCreated = await RelInputUser.create({
                idarchivo: fileCreated.idarchivo,
                identrada:inputCreated.idarchivo
            });
        }
        res.status(200).json({inputCreated});          
    } catch (error) {
        console.log("Error en el GET input", error);
        return res.status(404).json(error);          

    }
});


module.exports = router;