import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

// Create donation request
router.post('/', async (req, res) => {
  try {
    const { bloodType, location, requester } = req.body;
    
    const newDonation = new Donation({
      bloodType,
      location,
      requester
    });

    await newDonation.save();
    
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error(error);
  }
});

// Get all donation requests
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find().populate('requester');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error(error);
  }
});

// Get single donation request
router.get('/:id', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id).populate('requester');
    if (!donation) {
      return res.status(404).json({ message: 'Donation request not found' });
    }
    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error(error);
  }
});

export default router;
