import { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [hike, setHike] = useState()
  const initialState = {
    authorName: '',
    title: '',
    message: '',
    image:
      'https://cdn2.apstatic.com/photos/hike/7029288_smallMed_1554924128.jpg',
    hikeId: props.id
  }

  const [formState, setFormState] = useState(initialState)

  // useEffect(() => {
  //   const getInstance = async () => {
  //     const response = await axios.get('http://localhost:3001/wander/instance')
  //     setHike(response.data.)
  //   }
  //   getInstance()
  // }, [])

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
      <label htmlFor="authorName">Name:</label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        value={formState.authorName}
      />
      <label htmlFor="title">Title:</label>
      <input
        onChange={handleChange}
        type="text"
        id="title"
        value={formState.title}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        onChange={handleChange}
        value={formState.message}
        id="message"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="image">Post Image (url):</label>
      <input
        onChange={handleChange}
        type="text"
        id="image"
        value={formState.image}
      />
      <button type="submit">Post My Hike!</button>
    </form>
  )
}

export default Form
