import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Wander VT</h3>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allHikes">All Hikes</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

//need to set up link for About section of NavBar
/* <Link to="/about">About</Link> */
