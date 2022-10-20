const { Schema } = require('mongoose')

const Instance = new Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    authorName: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Instance
