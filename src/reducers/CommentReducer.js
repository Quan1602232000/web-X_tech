import {
    COMMENT_POST_REQUEST,
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAIL,
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAIL
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
  export {
    commentpostReducer,commentgetReducer
}