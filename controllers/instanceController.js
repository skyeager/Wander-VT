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

const readPost = (request, response) => {
  response.send({
    title: '',
    message: '',
    authorName: '',
    image: ''
  })
}

const updatePost = (request, response) => {
  response.send({
    id: '',
    title: '',
    message: '',
    authorName: '',
    image: ''
  })
}

const deletePost = (request, response) => {
  response.send({
    id: ''
  })
}

module.exports = {
  readPost,
  updatePost,
  deletePost,
  createInstance
}
