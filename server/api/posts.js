const router = require('express').Router()
const {Post} = require('../db/models')
const shortid = require('shortid')
module.exports = router

// GET all post
// http://localhost:8080/api/posts
router.get('/:pageNumber', (req, res, next) => {
  const postsPerPage = 2
  Post.findAll({
    order: [
      ['upvotes', 'DESC']
    ],
    offset: (req.params.pageNumber-1)*postsPerPage,
    limit: postsPerPage,
  })
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
// http://localhost:8080/api/posts/
router.post('/', (req, res, next) => {
  Post.create({
    uuid: shortid.generate(),
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
// http://localhost:8080/api/posts/:uuid
router.put('/:uuid', (req, res, next) => {
  Post.update({
    title: req.body.title,
    url: req.body.url,
    note: req.body.note,
    tag: req.body.tag,
    upvotes: req.body.upvotes,
    user_id: req.body.user_id
  }, {
    where: {
      uuid: req.params.uuid
    }
  })
  .then(updated => res.json(updated))
  .catch(next);
})

// DELETE
router.delete('/:uuid', (req, res, next) => {
  Post.destroy({
    where: {
      uuid: req.params.uuid
    }
  })
  .then(destroyed => res.json(destroyed))
  .catch(next);
})
