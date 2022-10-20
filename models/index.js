const mongoose = require('mongoose')
const HikeSchema = require('./Hike')
const InstanceSchema = require('./Instance')

const Hike = mongoose.model('Hike', HikeSchema)
const Instance = mongoose.model('Instance', InstanceSchema)

module.exports = {
  Hike,
  Instance
}
