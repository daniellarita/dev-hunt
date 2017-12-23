const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  note: {
    type: Sequelize.TEXT
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Post
