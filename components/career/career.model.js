module.exports = (sequelize, type) => {
    return sequelize.define('carreras', {
        idcarrera: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: type.TEXT
        }
    });
};