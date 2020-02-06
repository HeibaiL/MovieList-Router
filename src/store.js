import { combineReducers } from "redux";

let defaultState = {
  gotData: undefined
};

const SET_GAME_DATA = "SET_GAME_DATA";

export const setGameData = data => ({
  type: SET_GAME_DATA,
  payload: data
});

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GAME_DATA:
      return {
        ...state,
        gotData: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
    allData:dataReducer
})
