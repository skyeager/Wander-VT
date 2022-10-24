import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import HikeList from './components/HikeList'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allHikes/*" element={<HikeList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
