const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect();