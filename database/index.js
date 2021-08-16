const Sequelize = require('sequelize');

//Stablish conecction
const sequelize = new Sequelize(
    'postgres://adminadmin@forutn:Forutn123@forutn.postgres.database.azure.com:5432/postgres',
    {
        dialectOptions : {
            ssl : {
                require : true,
                rejectUnauthorized: false
            }
        }    
    }
);


//Creating the models for db.

const UserModel = require('../components/user/user.model');

const User = UserModel(sequelize, Sequelize);


sequelize.sync({ force : false}).then(() => {
    console.log("Tablas sincronizadas");
});


module.exports = {
    sequelize,
    User
}
