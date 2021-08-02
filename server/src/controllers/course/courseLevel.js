const { course, courseLevel } = require("../../../models");

exports.getCourseLevel = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await courseLevel.findAll({
      where: {
        courseId: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "CourseLevel Successfully Get",
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
