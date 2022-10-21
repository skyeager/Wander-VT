const { Hike } = require('../models')

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

const getHikeById = async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id).populate('instances')
    return res.status(200).json({
      hike
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllHikes = async (req, res) => {
  try {
    const hikes = await Hike.find()
    return res.status(200).json({ hikes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createHike,
  getHikeById,
  getAllHikes
}
