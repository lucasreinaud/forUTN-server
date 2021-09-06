module.exports = (sequelize, type) => {
    return sequelize.define('entradas', {
        identrada: {
            type: type.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
        idusuario: {
            type: type.BIGINT
        },
        idcarrera: {
            type: type.BIGINT
        },
        identradapadre: {
            type: type.BIGINT
        },
        contenido: {
            type: type.TEXT
        }
    });
};