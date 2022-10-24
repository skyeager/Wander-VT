import { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [instance, setInstance] = useState()
  const [hike, setHike] = useState()

  useEffect(() => {
    const getInstance = async () => {
      const response = await axios.get('http://localhost:3001/wander/instance')
      setHike(response.data.hikes)
      console.log(props)
    }
    getInstance()
  }, [])

  return <div></div>
}

export default Form
