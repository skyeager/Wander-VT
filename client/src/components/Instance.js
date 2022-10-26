import axios from 'axios'
import { useState } from 'react'
import UpdateInstance from './UpdateInstance'

const Instance = (props) => {
  const [updateInstance, setUpdateInstance] = useState(false)

  const handleClick = () => setUpdateInstance(true)

  const deleteInstance = async () => {
    await axios.delete(
      `http://localhost:3001/wander/instances/${props.instance._id}`
    )
    // let updatedHike = {
    //   ...props.hike
    // }
    // updatedHike.instances.splice(props.index, 1)
    // props.setHike(updatedHike)
    props.getHike()
  }

  if (updateInstance) {
    return (
      <UpdateInstance
        instance={props.instance}
        hike={props.hike}
        setHike={props.setHike}
        getHike={props.getHike}
        setUpdateInstance={setUpdateInstance}
      />
    )
  } else {
    return (
      <div className="instance">
        <h2>Name: {props.instance.authorName}</h2>
        <h2>Title:{props.instance.title}</h2>
        <h2>Notes from the trail:{props.instance.message}</h2>
        <img src={props.instance.image} alt="hike photo" height="100px" />

        <button onClick={handleClick}>Update Post</button>
        <button onClick={deleteInstance}>Delete Post</button>
      </div>
    )
  }
}

export default Instance
