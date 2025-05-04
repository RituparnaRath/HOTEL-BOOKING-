import { useState, useEffect } from 'react'
import axios from 'axios'
import HotelCard from '../components/HotelCard'
import { API } from '../util/constants'

const Home = () => {
    const [ hotels, setHotels ] = useState([])
    const getHotels = async() => {
        try {
            let data = await axios.get(`${API}/hotel`)
            // console.log(data.data);
            setHotels(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getHotels()
    }, [])
  return (
    <div className='row g-2'>
        {
            hotels.map(hotel => (
                <div className="col-md-4" key={hotel._id}>
                    <HotelCard hotel={hotel} />
                </div>
            ))
        }
    </div>
  )
}

export default Home