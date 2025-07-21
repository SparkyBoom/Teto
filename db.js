const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('placesdb', 'postgres', '1234', { // 🔁 change DB name, username, and password
  host: 'localhost',
  dialect: 'postgres',
});

const Place = sequelize.define('Place', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  geometry: {
    type: DataTypes.GEOMETRY('GEOMETRY', 4326),
    allowNull: false,
  },
}, {
  tableName: 'places',
  timestamps: false
});

module.exports = { sequelize, Place };