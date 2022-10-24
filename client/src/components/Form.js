import { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [hike, setHike] = useState()
  const initialState = {
    name: '',
    title: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getInstance = async () => {
      const response = await axios.get('http://localhost:3001/wander/instance')
      setHike(response.data.hikes)
      console.log(props)
    }
    getInstance()
  }, [])

  return (
    <div>
      <form></form>
    </div>
  )
}

export default Form
