import axios from 'axios'

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const initialState = {
  newPost: {},
  posts: []
}

export const receiveNewPost = post => ({
  type: ADD_NEW_POST,
  post
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const addNewPost = post => {
  return (dispatch) => {
    return axios.post('/api/posts', {
      title: post.title,
      url: post.url,
      note: post.note
      })
      .then(res => res.data)
      .then(post => {
        dispatch(receiveNewPost(post))
      })
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    return axios.get('/api/posts')
      .then(res => {
        dispatch(receiveNewPost(res.data))
      })
  }
}

// reducer
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case ADD_NEW_POST:
      newState.posts = action.post
      break
    case RECEIVE_POSTS:
      newState.posts = action.posts
      break
    default:
      return state
  }
  return newState
}
