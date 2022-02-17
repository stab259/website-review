module.exports = (sequelize, DataTypes) => {
    const Areas = sequelize.define("Areas", {
      areaname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area_position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Areas;
  };