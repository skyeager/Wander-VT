import Hike from './Hike'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HikeList = (props) => {
  const [hikes, setHikes] = useState([])

  const getHikes = async () => {
    const response = await axios.get('http://localhost:3001/wander/allHikes/')
    console.log(response)

    setHikes(response.data.hikes)
  }

  useEffect(() => {
    getHikes()
  }, [])

  return (
    <div className="hike-grid">
      {hikes.map((hike) => (
        <div className="hike-card" key={hike._id}>
          <img src={hike.image} alt={hike.title} />
          <h3>{hike.title}</h3>
          <Link to={hike._id}>Hike Info</Link>
          <Routes>
            <Route path="/:id" element={<Hike />} />
          </Routes>
        </div>
      ))}
    </div>
  )
}

export default HikeList

//referenced the boat lecture(react router lecture) and specifically the "Listings" file in this file.
