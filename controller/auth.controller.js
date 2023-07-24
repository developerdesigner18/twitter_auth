const User = require('../models/user');

const getUserData = async (req, res) => {
  try {
    console.log(req.body, 'hello');

    let data = await User.findById({ _id: req.body.userId });
    console.log(data);
    res.status(200).send({success: true, data: data})
  } catch (error) {
    console.log(error);
    res.status(400).send({success: false, data: error})
  }
};

module.exports = { getUserData };
