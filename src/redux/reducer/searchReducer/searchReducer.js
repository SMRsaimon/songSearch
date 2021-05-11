import { RECEIVE_API_DATA } from "../../action/userAction";



const reducer = (state = { profile: []}, action) => {

  console.log("reducer", state,action)
  switch (action.type) {
    case RECEIVE_API_DATA:
      return Object.assign({}, state, {
        profile: action.payload.profile
      });
    default:
      return state;
  }
};

export default reducer;
