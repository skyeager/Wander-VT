import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HikeList = (props) => {
  const [hikes, setHikes] = useState([])
  let navigate = useNavigate()

  const getHikes = async () => {
    const response = await axios.get('http://localhost:3001/wander/allHikes/')
    setHikes(response.data.hikes)
  }

  useEffect(() => {
    getHikes()
  }, [])

  const showHike = (hike) => {
    navigate(`/hike/${hike._id}`)
  }

  return (
    <div className="hike-grid">
      {hikes.map((hike) => (
        <div className="hike-card" key={hike._id}>
          <img className="hike-card-image" src={hike.image} alt={hike.title} />
          <h3 className="hike-card-title">{hike.title}</h3>
          <button id="hike-info-button" onClick={() => showHike(hike)}>
            Hike Info
          </button>
        </div>
      ))}
    </div>
  )
}

export default HikeList

//referenced the boat lecture(react router lecture) and specifically the "Listings" file in this file.
