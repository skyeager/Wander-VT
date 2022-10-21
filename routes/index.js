const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root route!'))

router.post('/hike', controllers.hikeController.createHike)
router.get('/hike/:id', controllers.hikeController.getHikeById)
router.get('/allHikes', controllers.hikeController.getAllHikes)
router.post('/instance', controllers.instanceController.createInstance)
router.get('/instance', controllers.instanceController.readPost)
router.put('/instance', controllers.instanceController.updatePost)
router.delete('/instance', controllers.instanceController.deletePost)

module.exports = router
