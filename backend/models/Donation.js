import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  bloodType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Completed'],
    default: 'Pending'
  }
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
