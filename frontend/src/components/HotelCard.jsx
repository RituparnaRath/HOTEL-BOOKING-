import { API } from '../util/constants'
import { Link } from 'react-router-dom'

const HotelCard = ({ hotel }) => {
    let {_id, hotelName, hotelPictures} = hotel
    const imageUrl = hotelPictures?.startsWith("http")
        ? hotelPictures
        : `${API}/uploads/${hotelPictures}`

    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="Hotel" style={{height: '120px'}} />
            <div className="card-body">
                <h5 className="card-title">{hotelName}</h5>
                <Link to={`/${_id}`} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default HotelCard
