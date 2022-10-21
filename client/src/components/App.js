import './App.css'
import NavBar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import HikeList from './HikeList.js'

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<About />} />
          <Route path="" element={<HikeList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

//do i need to put /wander on line 12 or just /?
//are these url endpoints the same as in the backend? or diferent?
