module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_firstname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User",
      },
      confirm_token :  {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reset_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      confirmed : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
    Users.associate = (models) => {
      Users.hasMany(models.Likes, {
        onDelete: "cascade",
      });
  
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
    };
    return Users;
  };