import Hike from './Hike'
import Form from './Form'
import About from './About'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HikeList = (props) => {
  const [hikes, setHikes] = useState()

  useEffect(() => {
    const getHikes = async () => {
      const response = await axios.get('http://localhost:3001/wander/allHikes')
      setHikes(response.data.results)
      console.log(props)
    }
    getHikes()
  }, [])

  return (
    <div className="hike-grid">
      {props.hikes.map((hike) => (
        <div className="hike-card" key={hike.id}>
          <img src={hike.image} alt={hike.title}></img>
          <h3>{hike.title}</h3>
          <button>More Hike Details</button>
          <Routes>
            <Route path-="/hike/:id" element={<Hike />} />
          </Routes>
        </div>
      ))}
    </div>
  )
}

export default HikeList

//referenced the boat lecture(react router lecture) and specifically the "Listings" file in this file.
