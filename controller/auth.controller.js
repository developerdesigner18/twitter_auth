const User = require('../models/user');

const getUserData = async (req, res) => {
  try {
    console.log(req.body, 'hello');

    let data = await User.findById({ _id: req.body.userId });
    console.log(data);
    res.send({ success: true, data });
  } catch (error) {
    console.log(error);
    res.send({success: false, data: null})
  }
};

module.exports = { getUserData };
