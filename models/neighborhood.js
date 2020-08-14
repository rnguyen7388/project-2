/*eslint-disable*/
module.exports = function(sequelize, DataTypes) {
    let Forum = sequelize.define("Forum", {
      neighborhood: {
          type: DataTypes.STRING,
          allowNull: false
      },
      post: {
          type: DataTypes.STRING,
          allowNull: false
      },
      author: {
          type: DataTypes.STRING,
          allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    });
    return Forum;
};

