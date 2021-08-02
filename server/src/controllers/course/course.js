const { course } = require("../../../models");

exports.getCourses = async (req, res) => {
  try {
    let data = await course.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
      return {
        ...item,
        image: process.env.PATH_UPLOAD + item.image,
      };
    });

    res.send({
      status: "success",
      message: "User Successfully Get",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
