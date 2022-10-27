import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import HikeList from './components/HikeList'
import { Routes, Route } from 'react-router-dom'
import Hike from './components/Hike'
import Form from './components/Form'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
