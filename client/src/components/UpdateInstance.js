import { useState } from 'react'
import axios from 'axios'

const UpdateInstance = (props) => {
  const [formState, setFormState] = useState({
    title: props.instance.title,
    message: props.instance.message,
    authorName: props.instance.authorName,
    image: props.instance.image
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/wander/instances/${props.instance._id}`,
      formState
    )
    props.getHike()
    props.setUpdateInstance(false)
  }

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="authorName">Name:</label>
      <input
        className="update-text"
        onChange={handleChange}
        type="text"
        id="authorName"
        value={formState.authorName}
      />
      <label htmlFor="title">Title:</label>
      <input
        className="update-text"
        onChange={handleChange}
        type="text"
        id="title"
        value={formState.title}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className="update-text"
        onChange={handleChange}
        value={formState.message}
        id="message"
        cols="30"
        rows="10"
        maxLength={150}
      ></textarea>
      <label htmlFor="image">Post Image (url):</label>
      <input
        className="update-text"
        onChange={handleChange}
        type="text"
        id="image"
        value={formState.image}
      />
      <button type="submit">Post Update</button>
    </form>
  )
}

export default UpdateInstance
