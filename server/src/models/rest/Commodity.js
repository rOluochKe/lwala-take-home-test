const commodity = (sequelize, DataTypes) => {
  const Commodity = sequelize.define(
    'commodity',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      malaria: {
        type: DataTypes.INTEGER,
      },
      familyPlanning: {
        type: DataTypes.INTEGER,
      },
      zincTablet: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  )

  Commodity.sync()
  return Commodity
}

export default commodity