/*eslint-disable*/
module.exports = function(sequelize, DataTypes) {
    let Post = sequelize.define("Post", {
      neighborhood: {
          type: DataTypes.STRING,
          allowNull: false
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    });

    Post.associate = function(models) {

      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Post;
};

