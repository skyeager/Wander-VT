import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Form'
import { Link } from 'react-router-dom'

const Hike = () => {
  const [hike, setHike] = useState({})

  useEffect(() => {
    const getHike = async () => {
      const response = await axios.get('http://localhost:3001/wander/hike/:id')
      setHike(response.data.hikes)
    }
    getHike()
  }, [])

  return (
    <div>
      <h3>{hike.title}</h3>
      <h2>{hike.image}</h2>
      <h2>Elevation: {hike.elevation}</h2>
      <h2>Difficulty: {hike.difficulty}</h2>
      <h2>Distance: {hike.distance}</h2>
      <h2>{hike.instances}</h2>
      <Routes>
        <Route path="/instance" element={<Form />} />
      </Routes>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Hike

// as defined in routes/index.js, /instance allows someone to create an instance of a hike
