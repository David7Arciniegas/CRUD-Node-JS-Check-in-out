const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'lilith5542',
	port: 5432,
	database: 'postgres',
	logging: false,
});

module.exports = { db, DataTypes };
