const Hike = () => {
  return (
    <div>
      <Routes>
        <Route path-="/instance" element={<Form />} />
      </Routes>
    </div>
  )
}

export default Hike

// as defined in index.js, /instance allows someone to create an instance of a hike
