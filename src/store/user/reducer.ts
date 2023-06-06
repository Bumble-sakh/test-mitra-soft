import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actionTypes';

import { IUser, UserActions, UserState } from './types';

const initialState: UserState = {
  pending: false,
  user: {} as IUser,
  error: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: {},
        error: action.payload.error,
      } as UserState;
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
