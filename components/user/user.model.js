module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id_usuario: {
            type: type.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        id_profile: {
            type: type.BIGINT
        },
        username: {
            type: type.TEXT
        },
        pw: {
            type: type.TEXT
        }
    });
};