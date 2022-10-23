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
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allHikes" element={<HikeList hikes={hikes} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
