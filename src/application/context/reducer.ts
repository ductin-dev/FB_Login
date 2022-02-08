import * as storage from "redux-storage";
import { combineReducers } from "redux";
import { BigNumber } from "ethers";
import * as actionTypes from "../../data/Action";

export interface userType {
  email: string;
  image: string;
  name: string;
  connected: boolean;
}

export const initState = {
  user: {
    email: "null",
    name: "null",
    image:
      "https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg",
    connected: false,
  } as userType,
};

function actionHandler(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

const reducer = storage.reducer(
  combineReducers({
    globalState: actionHandler,
  })
);

export default reducer;
