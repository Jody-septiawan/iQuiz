exports.getUsers = async (req, res) => {
  try {
    const users = [
      {
        id: 1,
        name: "user1",
      },
      {
        id: 2,
        name: "user2",
      },
    ];
    res.send({
      status: "success",
      message: "User Successfully Get",
      data: {
        users,
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
