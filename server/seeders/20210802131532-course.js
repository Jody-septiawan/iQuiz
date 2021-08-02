"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "HTML",
          image: "html.png",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSS",
          image: "css.jpeg",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Javascript",
          image: "javascript.png",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MySql",
          image: "mysql.png",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ReactJs",
          image: "reactjs.png",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NodeJs",
          image: "node.webp",
          status: "",
          isPublish: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
