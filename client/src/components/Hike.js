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

  //in Hike map through hike.instances array (either above or below form)to show them, display and pass props to an instance component
  //push this instance into instance array (that lives in Hike model)
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
      <Form id={id} hike={hike} setHike={setHike} getHike={getHike} />
      <Link to="/allHikes" className="navbar-links">
        Back to All Hikes
      </Link>
    </div>
  )
}

export default Hike

// as defined in routes/index.js, /instance allows someone to create an instance of a hike
