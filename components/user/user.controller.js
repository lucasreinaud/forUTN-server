const router = require('express').Router();
const {Sequelize, QueryTypes, Op} = require('sequelize');


const {
    User,
    Profile
} = require('../../database')


router.get('/', async (req, res) => {
    try {
        console.log("usuarios");
        const usuarios = await User.findAll(); 
        res.status(200).json(usuarios);  
    } catch (error) {
        console.log("Error en el GET USUARIOS",error);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
        if(users) res.status(200).json({status:200, message:users});
        else res.status(404).json({status: 404, message: 'Empty'});
    } catch (err) {
        error(res, 400, 'Error en el get user by id', err);
    }
});



/*
idperfil => tengo que hacer cosas con eso
carrera => viene solo
username => viene solo
pwd => va a ser el uid de firebase
mail => viene solo
*/

router.post("/", async (req,res) => {
    try{
        const {idcarrera, username, pwd, mail,} = req.body;
        const profileCreated = await Profile.create({
            nombreperfil : username
        });

        const userCreated = await User.create({
            idcarrera,
            username,
            pwd,
            mail,
            idperfil : profileCreated.idperfil
        });

        res.status(200).json({
            message: userCreated
        });

    }catch(e){
        error(res, 400, 'Error en el POST USER', err);
    }
});

module.exports = router;