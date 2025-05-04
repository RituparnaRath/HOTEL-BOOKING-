const express = require('express');
const upload = require('./../middlewares/fileUpload.middleware.js')
const {
    getAllHotels,
    getHotelById,
    addHotel,
    updateHotel,
    deleteHotel,
    searchHotels,
    updateHotelImage
} = require('../controllers/hotel.controller');

const hotelRouter = express.Router();

// CRUD + search routes
hotelRouter.get('/', getAllHotels);                     // GET all hotels
hotelRouter.get('/:id', getHotelById);                 // GET hotel by ID
hotelRouter.post('/',upload.single('hotelPictures'), addHotel);                       // POST new hotel
hotelRouter.put('/:id', upload.none(),updateHotel);                  // PUT update hotel
hotelRouter.delete('/:id', deleteHotel);               // DELETE hotel by ID
hotelRouter.get('/search/query', searchHotels);        // GET search hotels
hotelRouter.put('/image/:id',upload.single('hotelPictures'), updateHotelImage);     // PATCH update only image
module.exports = hotelRouter;
