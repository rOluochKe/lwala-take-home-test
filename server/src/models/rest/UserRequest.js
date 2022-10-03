const userRequest = (sequelize, DataTypes) => {
  const UserRequest = sequelize.define(
    'userRequest',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      chw: {
        type: DataTypes.STRING,
      },
      cha: {
        type: DataTypes.STRING,
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

  UserRequest.sync()
  return UserRequest
}

export default userRequest