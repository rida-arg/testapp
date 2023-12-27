module.exports = (sequelize, DataTypes) => {
      const Restaurant = sequelize.define("Restaurant", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      latitude: {
        type: DataTypes.STRING,
       
      },
      longitude: {
        type: DataTypes.STRING,
     
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      status: {
        type: DataTypes.INTEGER  
      }
    });

    Restaurant.associate = models => {
        Restaurant.belongsTo(models.City, {
            onDelete : "cascade"
          });
        Restaurant.belongsToMany(models.Livreur, { through: models.Commande });
  
      };
  
  
    return Restaurant;
  };