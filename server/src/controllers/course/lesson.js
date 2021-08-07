const { courseLevel, lesson } = require("../../../models");

exports.getLesson = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await lesson.findAll({
      where: {
        levelId: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "Lesson Successfully Get",
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

exports.addLesson = async (req, res) => {
  try {
    let data = req.body;

    const checkLesson = await lesson.findOne({
      where: {
        name: data.name,
      },
    });

    if (checkLesson) {
      return res.send({
        status: "failed",
        message: "Lesson already!",
      });
    }

    await lesson.create(data);

    res.send({
      status: "success",
      message: "Lesson Successfully add",
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
