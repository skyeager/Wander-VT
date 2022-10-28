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
        <Link to="/imagecredits" className="navbar-links">
          Image Credits
        </Link>
      </h3>
    </nav>
  )
}

export default NavBar
