module.exports = (sequelize, type) => {
    return sequelize.define('parametros', {
        idvalueparametro: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        value: {
            type: type.TEXT
        }
    });
};