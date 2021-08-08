const { courseLevel, lesson, content } = require('../../../models');

exports.getContent = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await lesson.findOne({
      where: {
        id,
      },
      include: [
        {
          model: courseLevel,
          as: 'lessonLevel',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
        {
          model: content,
          as: 'lessonContent',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    res.send({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.getContentLesson = async (req, res) => {
  try {
    const { id } = req.params;

    let lessonData = await lesson.findOne({
      where: {
        id,
      },
      include: {
        model: courseLevel,
        as: 'lessonLevel',
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    let data = await content.findAll({
      where: {
        lessonId: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    res.send({
      lessonData,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.addContent = async (req, res) => {
  try {
    const data = req.body;

    await content.create(data);

    res.send({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
