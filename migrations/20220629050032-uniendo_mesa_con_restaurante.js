"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // add relationship mesa with restaurantes
    try {
      await queryInterface.addColumn("Mesas", "restauranteId", {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Restaurantes",
          },
          key: "id",
        },
        allowNull: false,
      });
    } catch (error) {
      console.log(error);
    }
    // await queryInterface.addConstraint("Mesas", {
    //   type: "FOREIGN KEY",
    //   name: "FK_Mesa_Restaurante",
    //   references: {
    //     table: "Restaurantes",
    //     fields: "id",
    //   },
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
