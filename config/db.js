const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db',
})

const Users = db.define('Users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING(200),
        allowNull: false,
    }
})

const Friends = db.define('Friends', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    number: {
        type: Sequelize.STRING(12),
        allowNull: true
    }
})

Users.hasMany(Friends)
Friends.belongsTo(Users)


module.exports = {
    db, Users,Friends
}