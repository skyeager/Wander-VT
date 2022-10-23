import Hike from './Hike'
import Form from './Form'
import About from './About'
import { useNavigate } from 'react-router-dom'

const HikeList = (props) => {
  let navigate = useNavigate()

  const showHike = (hike) => {
    navigate(`${hike.id}`)
  }

  return (
    <div className="hike-grid">
      {props.hikes.map((hike) => (
        <div className="hike-card" onClick={() => showHike(hike)} key={hike.id}>
          <img src={hike.image} alt={hike.title}></img>
          <h3>{hike.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default HikeList

//referenced the boat lecture(react router lecture) and specifically the "Listings" file in this file.
