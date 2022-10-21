import Hike from './Hike'
import Form from './Form'

const HikeList = () => {
  return (
    <div>
      <header>
        <HikeList />
      </header>
      <main>
        <Routes>
          <Route path="" element={<Hike />} />
          <Route path="" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}

export default HikeList
