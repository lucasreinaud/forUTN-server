const router = require('express').Router();
require('dotenv').config();
const {Sequelize, QueryTypes, Op} = require('sequelize');
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const updateStrategy = multer({ storage: inMemoryStorage}).single('images');
const azureStorage = require('azure-storage');
const blobService = azureStorage.createBlobService(process.env.AZURE_STORAGE_CONNECTION_STRING);
const containerName = 'forutn';
const getStream = require('into-stream');

const _module = {
    getStorageAccountName : () => {
        const matches = /AccountName = (.*?)/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING);
        return matches[1];
    }
}




const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./,'');
    return identifier+"-"+originalName;
}


router.get('/', async (req, res) => {
    try {
     
    } catch (error) {
        console.log("Error en el GET FILES",error);
    }
});


router.post('/upload', updateStrategy , async (req, res) => {
        console.log(req.file);
        const blobName = getBlobName(req.file.originalname);
        console.log(req.file.originalname);
        const streamLength = req.file.buffer.length;
        const stream = getStream(req.file.buffer);
        console.log(stream)
        var customBlockSize = req.file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512;
        blobService.createBlockBlobFromStream(containerName, blobName, stream,streamLength, err => {
            if(err){
                console.log("ERROR:",err);
                return;
            }
        });
        res.status(200).json({
            status: 200,
            message: 'SUBIDA EXITOSA'
        });
});


module.exports = router;