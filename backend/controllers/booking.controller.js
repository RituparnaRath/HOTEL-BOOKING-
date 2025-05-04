const Booking = require('../models/booking.model');

// Create a new booking
const addBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = await Booking.create(bookingData);
    res.status(201).send(booking);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Get all bookings (optionally populate user and hotel)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('hotel');
    res.status(200).send(bookings);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Get booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user').populate('hotel');
    if (!booking) {
      return res.status(404).send({ message: 'Booking not found' });
    }
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Update booking status (e.g., cancel or complete)
const updateBooking = async (req, res) => {
    try {
      const bookingId = req.params.id;
      const updateData = req.body;
  
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        updateData,
        { new: true }
      );
  
      if (!updatedBooking) {
        return res.status(404).send({ message: 'Booking not found' });
      }
  
      res.status(200).send(updatedBooking);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ message: 'Booking not found' });
    }
    res.status(200).send({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  addBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
};
