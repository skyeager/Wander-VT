const UpdateForm = () => {
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="update-form">
      <button>Post Update</button>
    </div>
  )
}

export default UpdateForm

//conditionally render when click update to show update form
//have words show up with input fields with starting state value=formstate (object of key value pairs to pass to backend) of instance (not blank initial state)
//handle change the same
