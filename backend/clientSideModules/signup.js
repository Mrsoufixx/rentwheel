const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');

// router.use(bodyParser.json());
// User Registration 
 router.post('/signup', async (req, res) => {
  const { name, phone, email, password, cPassword } = req.body;
  console.log("req body : ",req.body)

  if (!name || !phone || !email || !password || !cPassword) {
    return res.status(422).json({ error: "Please fill the form properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already exists" });
    } else if (password !== cPassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const user = new User({ name, phone, email, password, cPassword });

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
