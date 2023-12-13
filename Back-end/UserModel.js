import { DataTypes } from 'sequelize';
import sequelize from './DataBaseConfig.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Usertype: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
  },
});

User.sync();

export default User;
