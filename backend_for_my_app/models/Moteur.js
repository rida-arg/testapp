module.exports = (sequelize, DataTypes) => {
      const Moteur = sequelize.define("Moteur", {
      matricule: {
        type: DataTypes.STRING,
        allowNull: false
      },
      assurance: {
        type: DataTypes.STRING,
        allowNull: false
      },
      carte: {
        type: DataTypes.STRING
      },
     
    });

    Moteur.associate = models => {
      Moteur.belongsTo(models.Livreur, {
          onDelete : "cascade"
        });
    };

  
    return Moteur;
  };