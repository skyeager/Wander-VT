import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Wander VT</h3>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/allHikes">All Hikes</Link>
      </div>
    </nav>
  )
}

export default NavBar

//need to set up link for About section of NavBar
/* <Link to="/about">About</Link> */
