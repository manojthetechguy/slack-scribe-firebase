import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialUserState = {
  currentUser: null,
  isLoading: true,
};
const userReducer = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: initialUserState.currentUser,
      };
    default: {
      return state;
    }
  }
};

const initialChannelState = {
  currentChannel: null,
  isPrivateChannel: false,
};

const channelReducer = (state = initialChannelState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
      };
    case actionTypes.SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel,
      };
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer,
});

export default rootReducer;
