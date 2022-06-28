"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    Promise.all([
      queryInterface.createTable("roles", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        rol_name: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
      queryInterface.createTable("Restaurantes", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    ]).then(() => {
      queryInterface.createTable("empleados", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        estado: {
          type: Sequelize.BOOLEAN,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "Users",
            },
            key: "id",
          },
          allowNull: false,
        },
        rolId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "roles",
            },
            key: "id",
          },
          allowNull: false,
        },
        restauranteId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "Restaurantes",
            },
            key: "id",
          },
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("empleados");
  },
};
