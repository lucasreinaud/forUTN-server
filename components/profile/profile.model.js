module.exports = (sequelize, type) => {
    return sequelize.define('perfiles', {
        idperfil: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        nombreperfil: {
            type: type.TEXT
        }
    });
};
