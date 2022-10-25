import { useState } from 'react'

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

  return (
    <div className="update-form">
      <label htmlFor="authorName">Name:</label>
      <input
        onChange={handleChange}
        type="text"
        id="authorName"
        value={formState.authorName}
      />
      <label htmlFor="title">Title:</label>{' '}
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
      <button>Post Update</button>
    </div>
  )
}

export default UpdateInstance

// //conditionally render when click update to show update form
// //have words show up with input fields with starting state value=formstate (object of key value pairs to pass to backend) of instance (not blank initial state)
// //handle change the same
