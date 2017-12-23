const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

// GET all post
// http://localhost:8080/api/posts
router.get('/', (req, res, next) => {
  Post.findAll({})
  .then(posts => res.json(posts))
  .catch(next)
})

// GET by user_id
// http://localhost:8080/api/posts/:user_id
router.get('/:user_id', (req, res, next) => {
  Post.findAll({
    where: {
      user_id: req.params.user_id
    }
  })
  .then(posts => res.json(posts))
  .catch(next)
})

// GET by 1 tag
// http://localhost:8080/api/posts/:tag
router.get('/:tag', (req, res, next) => {
  Post.findAll({
    where: {
      tag: {
        [Op.in]: req.params.tag
      }
    }
  })
  .then(posts => res.json(posts))
  .catch(next)
})

// POST
router.post('/', (req, res, next) => {
  Post.create({
    title: req.body.title,
    url: req.body.url,
    note: req.body.note,
    tag: req.body.tag,
    user_id: req.body.user_id
  })
  .then(created => res.json(created))
  .catch(next);
})

// PUT

// DELETE
