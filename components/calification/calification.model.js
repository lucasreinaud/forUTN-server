module.exports = (sequelize, type) => {
    return sequelize.define('calificaciones', {
        idcalificacion: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        idusuario: {
            type: type.BIGINT
        },
        identrada: {
            type: type.BIGINT
        },
        tipoclasificacion: {
            type: type.TEXT
        },
    });
};