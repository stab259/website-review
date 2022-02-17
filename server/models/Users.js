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
      token :  {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
  
    return Users;
  };