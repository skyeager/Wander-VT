import { useState } from 'react'

const Hike = () => {
  const [hike, setHike] = useState()

  useEffect(() => {
    const getHike = async () => {
      const response = await axios.get('http://localhost:3001/wander/hike/:id')
      setHike(response.data.results)
      console.log(props)
    }
    getHike()
  }, [])

  return (
    <div>
      <Routes>
        <Route path-="/instance" element={<Form />} />
      </Routes>
    </div>
  )
}

export default Hike

// as defined in routes/index.js, /instance allows someone to create an instance of a hike
