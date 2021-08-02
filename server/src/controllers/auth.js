const { user } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const schema = Joi.object({
    fullname: Joi.string().min(3).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
    role: Joi.required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.send({
      status: "failed",
      message: error.details[0].message,
    });
  }

  try {
    const checkEmail = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (checkEmail) {
      return res.send({
        status: "failed",
        message: "Fullname or Email is already!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const data = {
      ...req.body,
      password: hashedPassword,
    };

    const newUser = await user.create(data);

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);

    res.status(200).send({
      status: "success",
      message: "Register success",
      data: {
        id: newUser.id,
        name: newUser.fullname,
        email: newUser.email,
        role: newUser.role,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.send({
      status: "failed",
      message: error.details[0].message,
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!userExist) {
      return res.send({
        status: "failed",
        message: "Email not registered",
      });
    }

    const isValid = await bcrypt.compare(req.body.password, userExist.password);

    if (!isValid) {
      return res.send({
        status: "failed",
        message: "credential is invalid",
      });
    }

    const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY);

    res.status(200).send({
      status: "success",
      data: {
        id: userExist.id,
        name: userExist.fullname,
        email: userExist.email,
        role: userExist.role,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.userId;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.send({
        status: "failed",
      });
    }

    res.send({
      status: "success",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.fullname,
          email: dataUser.email,
          role: dataUser.role,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
