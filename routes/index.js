const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root route!'))

router.post('/post', controllers.createInstance)
router.post('/post', controllers.createHike)
router.get('/hikes', controllers.getAllHikes)

module.exports = router
