import { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [hike, setHike] = useState()
  const initialState = {
    name: '',
    title: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getInstance = async () => {
      const response = await axios.get('http://localhost:3001/wander/instance')
      setHike(response.data.hikes)
      console.log(props)
    }
    getInstance()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" cols="30" rows="10"></textarea>
      <button type="submit">Post My Hike!</button>
    </form>
  )
}

export default Form
