const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const DB = require('../config.json').DB

const db = new Sequelize(
    DB.DATABASE,
    DB.USER,
    DB.PASSWORD,
    {
        host: DB.HOST,
        dialect: "mysql"
    }
);

const Todo = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: DataTypes.STRING,
    done: {
        type: DataTypes.BOOLEAN,
        default: false
    }
})

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Todo.belongsTo(User)
User.hasOne(Todo)
User.hasMany(Todo)
Todo.belongsToMany(User, {as: 'xyz'})

db.sync({force: true})
    .then(() => console.info("Database configured"))
    .catch((err) => console.error(err))

exports.models = {
    Todo, User
}

