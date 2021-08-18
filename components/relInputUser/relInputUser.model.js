module.exports = (sequelize, type) => {
    return sequelize.define('rel_entradas_archivos', {
        id: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        idarchivo: {
            type: type.BIGINT
        },
        identrada: {
            type: type.BIGINT
        }
    });
};