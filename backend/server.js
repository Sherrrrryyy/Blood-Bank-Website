import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import donationRoutes from './routes/donation.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/donations', donationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
