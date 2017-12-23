const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

GET all post
GET by user_id
GET by tag

router.get('/', (req, res, next) => {
  Post.findAll({

  })
  .then(posts => res.json(posts))
  .catch(next)
})
