const { Instance, Hike } = require('../models')

const createInstance = async (req, res) => {
  try {
    const instance = await new Instance(req.body)
    await instance.save()
    const hike = await Hike.findById(req.body.hikeId)
    hike.instances.push(instance._id)
    await hike.save()
    return res.status(201).json({
      instance
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getInstanceById = async (req, res) => {
  try {
    const instance = await Instance.findById(req.params.id)
    return res.status(200).json({
      instance
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const instance = await Instance.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({
      instance
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const instance = await Instance.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      instance
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createInstance,
  getInstanceById,
  updatePost,
  deletePost
}
