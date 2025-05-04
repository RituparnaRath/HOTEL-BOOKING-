const express = require('express');
const upload = require('./../middlewares/fileUpload.middleware.js')

const {
  addBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require('../controllers/booking.controller');

const bookingRouter = express.Router();

// POST /booking - Create a new booking
bookingRouter.post('/',upload.none(), addBooking);

// GET /booking - Get all bookings
bookingRouter.get('/', getAllBookings);

// GET /booking/:id - Get booking by ID
bookingRouter.get('/:id', getBookingById);

// PUT /booking/:id/status - Update booking status
bookingRouter.put('/update/:id', updateBooking);

// DELETE /booking/:id - Delete booking
bookingRouter.delete('/:id', deleteBooking);

module.exports = bookingRouter;
