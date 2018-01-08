import axios from 'axios'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

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
  posts: []
}

// reducer
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_POSTS:
      newState.posts = action.posts
      break
    default:
      return state
  }
  return newState
}
