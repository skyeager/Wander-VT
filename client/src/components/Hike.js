import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Hike = () => {
  const [hike, setHike] = useState({})
  let navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const getHike = async () => {
      const response = await axios.get(
        `http://localhost:3001/wander/hike/${id}`
      )
      setHike(response.data.hike)
    }
    getHike()
  }, [])

  const showForm = (form) => {
    navigate('/instance')
  }

  return (
    <div>
      <h3>{hike.title}</h3>
      <img src={hike.image} alt={hike.title} />
      <h2>Elevation: {hike.elevation}</h2>
      <h2>Difficulty: {hike.difficulty}</h2>
      <h2>Distance: {hike.distance}</h2>
      <h2>{hike.instances}</h2>
      <Link to="/">Home</Link>
      {/* <button onClick={() => showForm(form)}>I've hiked this trail!</button> */}
      {/* //onClick conditional rendering here to show component! */}
    </div>
  )
}

export default Hike

// as defined in routes/index.js, /instance allows someone to create an instance of a hike
