import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const initialState = {
    authorName: '',
    title: '',
    message: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const instancePackage = {
      ...formState,
      hikeId: props.id
    }
    setFormState(initialState)

    let res = await axios.post(
      'http://localhost:3001/wander/instance',
      instancePackage
    )

    props.getHike()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="authorName">Name:</label>
      <input
        className="form-text"
        onChange={handleChange}
        type="text"
        id="authorName"
        value={formState.authorName}
      />
      <label htmlFor="title">Title:</label>
      <input
        className="form-text"
        onChange={handleChange}
        type="text"
        id="title"
        value={formState.title}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className="form-text"
        onChange={handleChange}
        value={formState.message}
        id="message"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="image">Post Image (url):</label>
      <input
        className="form-text"
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
