import axios from 'axios'

export const ADD_NEW_POST = 'ADD_NEW_POST'

export const receiveNewPost = post => ({
  type: ADD_NEW_POST,
  post
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
        dispatch(receiveNewPost(post))
      });
  };
};

const initialState = {
  newPost: {}
}

// reducer
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case ADD_NEW_POST:
      newState.newPost = action.post
      break
    default:
      return state
  }
  return newState
}
