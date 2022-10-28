import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Form from './Form'
import Instance from './Instance'

const Hike = () => {
  const [hike, setHike] = useState({})

  const { id } = useParams()

  const getHike = async () => {
    const response = await axios.get(`http://localhost:3001/wander/hike/${id}`)
    setHike(response.data.hike)
  }
  useEffect(() => {
    getHike()
  }, [])

  return (
    <div className="hike">
      <h1>{hike.title}</h1>
      <img
        className="hike-image"
        src={hike.image}
        alt={hike.title}
        height="300px"
      />
      <h2>Elevation: {hike.elevation}</h2>
      <h2>Difficulty: {hike.difficulty}</h2>
      <h2>Distance: {hike.distance}</h2>
      <div className="all-instances">
        {hike.instances?.map((instance, index) => (
          <Instance
            instance={instance}
            setHike={setHike}
            index={index}
            key={index}
            hike={hike}
            getHike={getHike}
          />
        ))}
      </div>
      <Form id={id} hike={hike} setHike={setHike} getHike={getHike} />
      <Link to="/allHikes" className="navbar-links">
        Back to All Hikes
      </Link>
    </div>
  )
}

export default Hike
