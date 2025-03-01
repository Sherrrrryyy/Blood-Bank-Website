const express = require('express');
const Donor = require('../models/Donor');
const router = express.Router();

// GET all donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes as needed for CRUD operations

module.exports = router;
