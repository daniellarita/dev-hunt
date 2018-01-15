import axios from 'axios'
import store from './index'

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_UPVOTE = 'ADD_UPVOTE'

const initialState = {
  newPost: {},
  posts: [],
  upvoted: {}
}

export const receiveNewPost = post => ({
  type: ADD_NEW_POST,
  post
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const addUpvote = post => ({
  type: ADD_UPVOTE,
  post
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

export const fetchPosts = (pageNumber) => {
  return (dispatch) => {
    return axios.get(`/api/posts/${pageNumber}`)
      .then(res => {
        dispatch(receiveNewPost(res.data))
      })
  }
}

export const addUpvoteToPost = (post, pageNumber) => {
  let upvotes = post.upvotes + 1
  return (dispatch) => {
    axios.put(`/api/posts/${post.uuid}`,{
        title: post.title,
        url: post.url,
        note: post.note,
        upvotes: upvotes
      })
      .then(res => {
        dispatch(fetchPosts(pageNumber))
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
    case ADD_UPVOTE:
      newstate.upvoted = action.post
    default:
      return state
  }
  return newState
}
