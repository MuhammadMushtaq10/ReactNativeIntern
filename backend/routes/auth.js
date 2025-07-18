const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const {name, email, password, phone} = req.body;

  try {
    const existingUser = await User.findOne({email});
    if (existingUser)
      return res.status(400).json({message: 'User already exists'});

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    res.status(201).json({message: 'User registered successfully', User});
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({message: 'Something went wrong'});
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});
    if (!existingUser) return res.status(400).json({message: 'User not found'});

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) return res.status(400).json({message: 'Invalid password'});

    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({token, user: existingUser});
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({message: 'Something went wrong'});
  }
});

module.exports = router;
