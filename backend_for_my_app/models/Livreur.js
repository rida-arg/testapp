module.exports = (sequelize, DataTypes) => {
     const Livreur = sequelize.define("Livreur", {
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cin: {
        type: DataTypes.STRING,
        unique: true
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
        unique: true
      },
      latitude: {
        type: DataTypes.STRING
      },
      longitude: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN
      },
      status: {
        type: DataTypes.INTEGER  
      }
    });

    Livreur.associate = models=> {
        Livreur.belongsTo(models.City, {
            onDelete : "cascade"
          });
        Livreur.hasOne(models.Moteur, {
            onDelete : "cascade"
        }); 
        Livreur.belongsToMany(models.Restaurant, { through: models.Commande });
 
      };

  
    return Livreur;
  };