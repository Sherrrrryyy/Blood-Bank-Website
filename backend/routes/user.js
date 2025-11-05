import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Donor from '../models/Donor.js'; // Import the Donor model

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, bloodGroup, city, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      bloodGroup,
      city,
      role
    });

    await newUser.save();

    // Create new donor if the role is Donor
    if (role === 'Donor') {
        const newDonor = new Donor({
            name,
            bloodType: bloodGroup,
            contact: phone,
            location: city,
        });
        await newDonor.save();
    }

    // Create token
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '5h' }
    );

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    console.error('Registration error:', error); // Improved error logging
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error(error);
  }
});

export default router;
