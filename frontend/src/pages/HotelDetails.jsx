import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API } from '../util/constants'

const HotelDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [hotel, setHotel] = useState({})

    const getHotelDetails = async () => {
        try {
            let response = await axios.get(`${API}/hotel/${id}`)
            setHotel(response.data)
        } catch (error) {
            console.error(error)
            alert("Unable to fetch hotel details.")
            navigate("/")
        }
    }

    useEffect(() => {
        getHotelDetails()
    }, [id])

    return (
        <div className='row g-3 mt-4'>
            <div className="col-md-6">
            <img src={`${API}/uploads/${hotel.hotelPictures}`} className='img-fluid w-100' />
            </div>
            <div className="col-md-6">
                <h3>{hotel.hotelName} Hotel</h3>
                <p><strong>Rating:</strong> {hotel.hotelRating}</p>
                <p><strong>Location:</strong> {hotel.hotelLocation}</p>
                <p><strong>Contact:</strong> {hotel.hotelContact}</p>
                <p><strong>Amenities:</strong> {hotel.amenities}</p>
                <p><strong>Availability:</strong> {hotel.availability}</p>

                <div className="card mt-4">
                    <div className="card-body">
                        <p className="lead fw-bold mb-2">Owner Details</p>
                        <p><strong>Name:</strong> {hotel?.hotelOwner?.name}</p>
                        <p><strong>Mobile:</strong> {hotel?.hotelOwner?.mobile}</p>
                        <p><strong>Email:</strong> {hotel?.hotelOwner?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetails
