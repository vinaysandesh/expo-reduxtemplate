import { CURRENT_STATE } from "./type";

 
const INITIAL_STATE = {
  currentstate:false,
  userValId:"",
  bookmarkStatus:false
};
 
export const initReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CURRENT_STATE:
          return {...state,currentstate:action.payload}
      default:
        return state
    }
  };