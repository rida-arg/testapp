module.exports = (sequelize, DataTypes) => {
      const User = sequelize.define("User", {
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prenom: {
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

     User.associate = models => {
      User.belongsTo(models.City, {
          onDelete : "cascade"
        });
      User.belongsTo(models.Role, {
          onDelete : "cascade"
      });  
    };

  
    return User;
  };