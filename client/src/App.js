import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import HikeList from './components/HikeList'
import { Routes, Route } from 'react-router-dom'
import Hike from './components/Hike'
import Form from './components/Form'
import ImageCredits from './components/ImageCredits'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/allHikes/*" element={<HikeList />} />
          <Route path="/hike/:id" element={<Hike />} />
          <Route path="/instance" element={<Form />} />
          <Route path="/imagecredits" element={<ImageCredits />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
