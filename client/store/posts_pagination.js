export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'

const initialState = {
  pageNumber: 1
}

export const setPageNumber = (pageNumber) => {
  return {
    type: SET_PAGE_NUMBER,
    pageNumber
  }
}

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case SET_PAGE_NUMBER:
      newState.pageNumber = action.pageNumber
      break
    default:
      return state
  }
  return newState
}
