const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hike = new Schema(
  {
    title: { type: String, required: true },
    elevation: { type: Number, required: true },
    difficulty: { type: String, required: true },
    distance: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Hike', Hike)

//this is for each individual hike
