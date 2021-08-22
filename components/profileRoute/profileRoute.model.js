module.exports = (sequelize, type) => {
    return sequelize.define('perfiles_rutas', {
        idruta: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        idperfil: {
            type: type.BIGINT
        },
        ruta: {
            type: type.TEXT
        }
    });
};