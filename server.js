const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const postController = require('./controllers/postController')
const hikeController = require('./controllers/hikeController')
// const { post } = require('./models/Hike')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.use('/wander', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.post('/wander/post', postController.createPost)
app.get('/wander/post', postController.readPost)
app.put('/wander/post', postController.updatePost)
app.delete('/wander/post', postController.deletePost)
app.get('/wander/hike', hikeController.readHike)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
