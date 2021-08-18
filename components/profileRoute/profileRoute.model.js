module.exports = (sequelize, type) => {
    return sequelize.define('perfiles_rutas', {
        idRuta: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        idPerfil: {
            type: type.BIGINT
        },
        ruta: {
            type: type.TEXT
        }
    });
};