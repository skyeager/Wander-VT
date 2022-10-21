const { Schema } = require('mongoose')

const Hike = new Schema(
  {
    title: { type: String, required: true },
    elevation: { type: Number, required: true },
    difficulty: { type: String, required: true },
    distance: { type: Number, required: true },
    image: { type: String, required: true },
    instances: [{ type: Schema.Types.ObjectId, ref: 'Instance' }]
  },
  { timestamps: true }
)

module.exports = Hike

//this is for each individual hike
