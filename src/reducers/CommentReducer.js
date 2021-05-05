
import {
  COMMENT_POST_REQUEST,
  COMMENT_POST_SUCCESS,
  COMMENT_POST_FAIL,
  COMMENT_GET_REQUEST,
  COMMENT_GET_SUCCESS,
  COMMENT_GET_FAIL,
  USER_LIKE_REQUEST,
  USER_LIKE_SUCCESS,
  USER_LIKE_FAIL,
  NUMBER_LIKE_MOTO_REQUEST,
  NUMBER_LIKE__MOTO_SUCCESS,
  NUMBER_LIKE_MOTO_FAIL,
  PUSH_USER_LIKE_MOTO_REQUEST,
  PUSH_USER_LIKE__MOTO_SUCCESS,
  PUSH_USER_LIKE_MOTO_FAIL
} from '../constants/CommentConstan';

function commentpostReducer(state = { commentCreate: {} }, action) {
    switch (action.type) {
      case COMMENT_POST_REQUEST:
        return { loading: true, commentCreate: {} };
      case COMMENT_POST_SUCCESS:
        return { loading: false, commentCreate: action.payload };
      case COMMENT_POST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function commentgetReducer(state = { comments: [] }, action) {
    switch (action.type) {
      case COMMENT_GET_REQUEST:
        return { loading: true, comments: [] };
      case COMMENT_GET_SUCCESS:
        return { loading: false, comments: action.payload };
      case COMMENT_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function getuserlikeReducer(state = { userlike: [] }, action) {
    switch (action.type) {
      case USER_LIKE_REQUEST:
        return { loading: true, userlike: [] };
      case USER_LIKE_SUCCESS:
        return { loading: false, userlike: action.payload };
      case USER_LIKE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PutlikeReducer(state = { like: {} }, action) {
    switch (action.type) {
      case NUMBER_LIKE_MOTO_REQUEST:
        return { loading: true, like: {} };
      case NUMBER_LIKE__MOTO_SUCCESS:
        return { loading: false, like: action.payload };
      case NUMBER_LIKE_MOTO_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PushuserlikeReducer(state = { push_userlike: {} }, action) {
    switch (action.type) {
      case PUSH_USER_LIKE_MOTO_REQUEST:
        return { loading: true, push_userlike: {} };
      case PUSH_USER_LIKE__MOTO_SUCCESS:
        return { loading: false, push_userlike: action.payload };
      case PUSH_USER_LIKE_MOTO_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {
    commentpostReducer,commentgetReducer,getuserlikeReducer,PutlikeReducer,PushuserlikeReducer
}