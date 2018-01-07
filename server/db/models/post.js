const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  uuid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
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
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  user_id: {
    type: Sequelize.STRING
  }
})

module.exports = Post
