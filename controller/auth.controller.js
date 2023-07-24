const User = require('../models/user');

const getUserData = async (req, res) => {
  try {
    console.log(req.body);
    let data = await User.findById(req.userId);
    console.log(data);
    res.send(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
    res.send(400).json({ success: false });
  }
};

module.exports = { getUserData };
