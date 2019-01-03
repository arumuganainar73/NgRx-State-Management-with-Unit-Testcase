import {
  userAction,
  userActionTypes
} from './user.actions';

/**
 * Interface for the 'set-asset-info' data used in
 *  - UserState, and
 *  - UserReducer
 *
 *  Note: replace if already defined in another module
 */

export interface UserState {
  userData: any;
  listfail: any;
  createUserFail: any;
  deleteUserFail: any;
  userDelete: any;
}

export const initialState: UserState = {
  userData: null,
  userDelete: null,
  createUserFail: null,
  deleteUserFail: null,
  listfail: null
};

export function UserReducer(
  state: UserState = initialState,
  action: userAction
): UserState {
  switch (action.type) {
    case userActionTypes.CUSTOMER_LIST_SUCCESS: {
      return { ...state, userData: action.payload };
    }
    case userActionTypes.CUSTOMER_LIST_FAIL: {
      return { ...state, listfail: action.payload };
    }
    case userActionTypes.CREATE_CUSTOMER_SUCCESS: {
      return state = { ...state, userData: action.payload };
    }
    case userActionTypes.CREATE_CUSTOMER_FAIL: {
      return state = { ...state, createUserFail: action.payload };
    }
    case userActionTypes.DELETE_CUSTOMER_SUCCESS: {
      return state = { ...state, userData: action.payload };
    }
    case userActionTypes.DELETE_CUSTOMER_FAIL: {
      return state = { ...state, deleteUserFail: action.payload };
    }

    default:
      return state;
  }
}
