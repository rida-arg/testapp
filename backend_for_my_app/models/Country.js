module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER ,
      }
    });

    Country.associate = models => {
        Country.hasMany(models.City, {
          onDelete : "cascade"
        });
      };  
  
    return Country;
  };