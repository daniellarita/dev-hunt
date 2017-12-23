const User = require('./user')
const Post = require('./post')

User.hasMany(Post)

module.exports = {
  User,
  Post
}
