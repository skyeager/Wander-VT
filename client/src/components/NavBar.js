import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>
        Wander VT
        <Link to="/" className="navbar-links">
          About
        </Link>
        <Link to="/allHikes" className="navbar-links">
          All Hikes
        </Link>
      </h3>
    </nav>
  )
}

export default NavBar

//need to set up link for About section of NavBar
/* <Link to="/about">About</Link> */
