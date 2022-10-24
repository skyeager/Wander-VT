import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const initialState = {
    authorName: '',
    title: '',
    message: '',
    image: '',
    hikeId: props.id
  }

  const [formState, setFormState] = useState(initialState)

  //trying to set entered values equal to current state:

  //trying to do post request for this hike to display the instance added for this specific hike (along with all other previous instances of this hike):
  // let res = await axios.post(
  //   'http://localhost:3001/wander/instance',
  //   formState
  // )

  //when submit:
  //create new instance
  //push this instance into instance array (that lives in Hike model)
  //get request for this hike (with the new instance on it, and past instances)
  //when the form is submitted this runs the function we want to run and then sets it back to empty
  const handleSubmit = async (event) => {
    event.preventDefault()
    const instancePackage = {
      authorName: formState.authorName,
      title: formState.title,
      message: formState.message,
      image: formState.image,
      hikeId: props.id
    }
    // setFormState().push(instancePackage)
    setFormState(initialState)
  }

  //axios call pass instancePackage

  //this sets the value entered in each field of the form equal to the state of the form
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
