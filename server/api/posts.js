const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Post.findAll({
  })
    .then(posts => res.json(posts))
    .catch(next)
})
