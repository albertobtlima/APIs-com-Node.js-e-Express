"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: "estudante_id",
      });

      Matricula.belongsTo(models.Curso, {
        foreignKey: "curso_id",
      });
    }
  }
  Maticula.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Maticula",
      tableName: "matriculas",
    }
  );
  return Matricula;
};
