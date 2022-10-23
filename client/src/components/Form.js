const Form = () => {
  const [instance, setInstance] = useState()

  useEffect(() => {
    const getInstance = async () => {
      const response = await axios.get('http://localhost:3001/wander/instance')
      setHike(response.data.results)
      console.log(props)
    }
    getInstance()
  }, [])

  return <div></div>
}

export default Form
