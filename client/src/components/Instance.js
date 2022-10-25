import axios from 'axios'

const Instance = (props) => {
  //DO I NEED TO ADD IN STATE FOR THE FOLLOWING TWO?

  // const updateInstance = async (instance) => {
  //   let res = await axios.put(
  //     `http://localhost:3001/wander/instances/${id}`,
  //     {}
  //   )
  // }
  //conditional rendering
  //only shows form if click update instance
  //make updateForm component

  const deleteInstance = async () => {
    await axios.delete(
      `http://localhost:3001/wander/instances/${props.instance._id}`
    )
    let updatedHike = {
      ...props.hike
    }
    updatedHike.instances.splice(props.index, 1)
    props.setHike(updatedHike)
  }

  return (
    <div className="instance">
      <h2>Name: {props.instance.authorName}</h2>
      <h2>Title:{props.instance.title}</h2>
      <h2>Notes from the trail:{props.instance.message}</h2>
      <img src={props.instance.image} alt="hike photo" height="100px" />
      {/* <button onClick={() => updateInstance(instance)}>Update Post</button> */}
      <button onClick={deleteInstance}>Delete Post</button>
    </div>
  )
}

// const [instance, setInstance] = useState([])

// const { id } = useParams()

// useEffect(() => {
//   const getInstance = async () => {
//     const response = await axios.get(
//       `http://localhost:3001/wander/instances/${id}`
//     )
//     console.log(response)
//     setInstance(response.data.instance)
//   }
//   getInstance()
// }, [])

export default Instance
