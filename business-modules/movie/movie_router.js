const express = require('express');
const router = express.Router();
const movie_controller=require('./movie_controller')

router.post('/add',movie_controller.addMovie)
router.post('/comment',movie_controller.addComment)
router.post('/rate',movie_controller.addRate)
router.get('/getRates',movie_controller.getRates)
// router.post('/profile/checkPassword',profile_controller.checkPassword)


 

module.exports = router;