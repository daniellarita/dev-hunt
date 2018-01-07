import axios from 'axios'

export const GET_POST = 'GET_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// action creators
export function setPosts(posts) {
  return {
    type: GET_POST,
    posts
  }
}

export function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post
  }
}

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export function fetchPosts() {
  return function(dispatch, getState) {
    axios.get(`/api/posts`)
    .then(results => dispatch(setPosts(results.data)))
    .catch(console.log)
  }
}

export const addNewPost = post => {
  return (dispatch, getState) => {
    return axios.post('/api/posts', {
      title: post.title,
      url: post.url,
      note: post.note
      })
      .then(res => res.data)
      .then(post => {
        console.log(getState(),"STATE")
        const newListOfPosts = getState().post.posts.concat([post])
        dispatch(receivePosts(newListOfPosts))
        // hashHistory.push(`/posts/${post.id}`)
      });
  };
};

const initialState = {
  posts: [],
  selected: {}
}

// reducer
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case GET_POST:
      newState.posts = action.posts
      break
    case RECEIVE_POST:
      newState.selected = action.post
      break
    case RECEIVE_POSTS:
      newState.posts = action.posts
      break
    default:
      return state
  }
  return newState
}
