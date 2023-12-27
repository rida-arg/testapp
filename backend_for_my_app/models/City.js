module.exports = (sequelize, DataTypes) => {
      const City = sequelize.define("City", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    City.associate = models => {
      City.belongsTo(models.Country, {
        onDelete : "cascade"
      });
      City.hasMany(models.Livreur, {
        onDelete : "cascade"
      });
      City.hasMany(models.User, {
        onDelete : "cascade"
      });
      City.hasMany(models.Restaurant, {
        onDelete : "cascade"
      });
    };
    return City;
  };