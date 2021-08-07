const { course, courseLevel, lesson } = require("../../../models");

exports.getCourseLevel = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await courseLevel.findAll({
      where: {
        courseId: id,
      },
      include: {
        model: lesson,
        as: "levelLesson",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
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

exports.addCourseLevel = async (req, res) => {
  try {
    let data = req.body;

    const checkName = await courseLevel.findOne({
      where: {
        name: data.name,
      },
    });

    if (checkName) {
      return res.send({
        status: "failed",
        message: "Course level already!",
      });
    }

    await courseLevel.create(data);

    res.send({
      status: "success",
      message: "Course level Successfully add",
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

exports.deleteCourseLevel = async (req, res) => {
  try {
    let { id } = req.params;

    const checkId = await courseLevel.findOne({
      where: {
        id,
      },
    });

    if (!checkId) {
      return res.send({
        status: "failed",
        message: "Course level not found!",
      });
    }

    await courseLevel.destroy({
      where: {
        id,
      },
    });

    await lesson.destroy({
      where: {
        levelId: checkId.id,
      },
    });

    res.send({
      status: "success",
      message: `Course level Successfully delete id: ${id}`,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
