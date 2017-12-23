import axios from 'axios'

export const GET_POST = 'GET_POST'

export function setPosts(posts) {
  return {
    type: GET_POST,
    posts
  }
}

export function fetchPosts() {
  return function(dispatch, getState) {
    axios.get(`/api/posts`)
    .then(results => dispatch(setPosts(results.data)))
    .catch(console.log)
  }
}

const initialState = { posts: [] }
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case GET_POST:
      newState.posts = action.posts
      break
    default:
      return state
  }
  return newState
}
