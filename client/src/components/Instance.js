const Instance = (props) => {
  //DO I NEED TO ADD IN STATE FOR THE FOLLOWING TWO?
  // const updateInstance = async (instance) => {
  //   let res = await axios.put(`http://localhost:3001/wander/instances/${id}`)
  // }

  // const deleteInstance = async (instance) => {
  //   let res = await axios.delete(`http://localhost:3001/wander/instances/${id}`)
  // }

  return (
    <div className="instance">
      <h2>Name: {props.instance.authorName}</h2>
      <h2>Title:{props.instance.title}</h2>
      <h2>Notes from the trail:{props.instance.message}</h2>
      <img src={props.instance.image} alt="hike photo" height="100px" />
      {/* <button  onClick={() => upateInstance(instance)}>Update Post</button>
      <button onClick={() => deleteInstance(instance)}>Delete Post</button> */}
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
