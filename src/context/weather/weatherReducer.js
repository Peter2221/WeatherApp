import {
  GET_DATA,
  SET_LOADED
} from '../types'

export default (state, action) => {
  switch (action.type){
    case GET_DATA:
      console.log(action.payload);
      return {
        ...state,
        weather: action.payload,
        isLoaded: true
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: false
      }
    default:
      return state
  }
}