import { DataTypes } from 'sequelize';
import sequelize from './DataBaseConfig.js';
import User from './UserModel.js';

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('education'),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasOne(Article);
Article.belongsTo(User);

Article.sync();

export default Article;
