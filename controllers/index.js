//in here use javascript to push hike instance ID into an array on hikes
//.push into an array

const Hike = require('../models/Hike')

const createHike = async (req, res) => {
  try {
    const hike = await new Hike(req.body)
    await hike.save()
    return res.status(201).json({
      hike
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const Instance = require('../models/Instance')

const createInstance = async (req, res) => {
  try {
    const instance = await new Instance(req.body)
    await instance.save()
    return res.status(201).json({
      instance
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createHike,
  createInstance
}
