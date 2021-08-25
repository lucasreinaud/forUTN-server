const router = require('express').Router();
require('dotenv').config();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const updateStrategy = multer({ storage: inMemoryStorage}).any('images');
const uploadFilesToAzure = require('../../helpers/uploadFilesToAzure');

const {
    File
} = require('../../database')

router.get('/', async (req, res) => {
    try {
     
    } catch (error) {
        console.log("Error en el GET FILES",error);
    }
});


router.post('/upload', updateStrategy , async (req, res) => {
    try{
        const files = await uploadFilesToAzure(req.files);
        console.log(files)
        const file = await File.create({
            tipo: 'c',
            urlFile : files[0].urlFile,

        })
        res.status(200).json({
            status: 200,
            message: 'SUBIDA EXITOSA',
            files,
        });
    }catch(e){
        console.log(e)
        res.status(400).json({message:'malo'})
    }
    
});



module.exports = router;