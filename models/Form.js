const { Form } = require('mongoose')

const Form = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = F
