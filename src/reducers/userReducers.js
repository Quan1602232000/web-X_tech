import {
  USER_SIGNOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_USERPROFILE_REQUEST,
  USER_USERPROFILE_SUCCESS,
  USER_USERPROFILE_FAIL
}
  from '../constants/userConstant';

function userSigninReducers(state = { userInfo: [] }, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true, userInfo: [] };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
}
function userRegisterReducer(state = { userInfo: [] }, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, userInfo: [] };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function userprofileReducer(state = { userPF: [] }, action) {
  switch (action.type) {
    case USER_USERPROFILE_REQUEST:
      return { loading: true, userPF: [] };
    case USER_USERPROFILE_SUCCESS:
      return { loading: false, userPF: action.payload };
    case USER_USERPROFILE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export { userSigninReducers, userRegisterReducer, userprofileReducer };