module.exports = (sequelize, type) => {
    return sequelize.define('parametros', {
        idparametro: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        value: {
            type: type.TEXT
        }
    });
};