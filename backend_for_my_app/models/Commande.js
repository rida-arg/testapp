module.exports = (sequelize, DataTypes) => {
    const Commande = sequelize.define("Commande", {
      price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price_liv: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_client: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name_client: {
        type: DataTypes.STRING,
        allowNull: true
      },
      delivered: {
        type: DataTypes.BOOLEAN
      },
      latitude: {
        type: DataTypes.STRING,
      },
      longitude: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER  
      }
    });

  /*  Commande.associate = (models) => {
      models.Restaurant.belongsToMany(models.Livreur, { through: Commande });
      models.Livreur.belongsToMany(models.Restaurant, { through: Commande });
    };  */

  
    return Commande;
  };