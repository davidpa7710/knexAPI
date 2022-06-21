const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const { findOneWithUser } = require('../models/Homes')

router.post('/homes', (homeController.homeCreate))
router.get('/homes', (homeController.findAllHomes) )
router.get('/homes/:idHome', (homeController.findOneHome) )
router.patch('/homes/:idHome', (homeController.updateOneHome))
router.destroy('/homes/:idHome', (homeController.softDeleteOneHome))
router.delete('/homes/:idHome/destroy', (homeController.destroyOneHome))
router.get('/homes/:idHome/detail', (homeController ,findOneWithUser))

module.exports = router