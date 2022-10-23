import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import HikeList from './components./HikeList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getAllHikes } from '.../controllers/hikeController'
import hikesArray from '.../seed/hikes'

const App = () => {
  const [hikes, setHikes] = useState([hikesArray])

  useEffect(() => {
    const getHikes = async () => {
      const response = await axios.get('http://localhost:3001/wander/allHikes')
      setHikes(response.data.results)
    }
    getHikes()
  }, [])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allHikes" element={<HikeList hikes={hikes} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

//do i need to put /wander on line 12 or just /?
//are these url endpoints the same as in the backend? or diferent?

// ADD About section in between Home and HikeList components.
/* <Route path="/about" element={<About />} /> */
