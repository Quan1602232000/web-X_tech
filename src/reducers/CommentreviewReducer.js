import {
    COMMENT_REVIEW_POST_REQUEST,
    COMMENT_REVIEW_POST_SUCCESS,
    COMMENT_REVIEW_POST_FAIL,
    COMMENT_REVIEW_GET_REQUEST,
    COMMENT_REVIEW_GET_SUCCESS,
    COMMENT_REVIEW_GET_FAIL,
    USER_LIKE_REVIEW_REQUEST,
    USER_LIKE_REVIEW_SUCCESS,
    USER_LIKE_REVIEW_FAIL,
    NUMBER_LIKE_REVIEW_REQUEST,
    NUMBER_LIKE_REVIEW_SUCCESS,
    NUMBER_LIKE_REVIEW_FAIL,
    PUSH_USER_LIKE_REVIEW_REQUEST,
    PUSH_USER_LIKE_REVIEW_SUCCESS,
    PUSH_USER_LIKE_REVIEW_FAIL
} from '../constants/CommentReviewConstant';

function commentReviewgetReducer(state = { comments_Review: [] }, action) {
    switch (action.type) {
      case COMMENT_REVIEW_GET_REQUEST:
        return { loading: true, comments_Review: [] };
      case COMMENT_REVIEW_GET_SUCCESS:
        return { loading: false, comments_Review: action.payload };
      case COMMENT_REVIEW_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function commentReviewpostReducer(state = { commentreviewCreate: {} }, action) {
    switch (action.type) {
      case COMMENT_REVIEW_POST_REQUEST:
        return { loading: true, commentreviewCreate: {} };
      case COMMENT_REVIEW_POST_SUCCESS:
        return { loading: false, commentreviewCreate: action.payload };
      case COMMENT_REVIEW_POST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function getuserlikeReviewReducer(state = { userlikereview: [] }, action) {
    switch (action.type) {
      case USER_LIKE_REVIEW_REQUEST:
        return { loading: true, userlikereview: [] };
      case USER_LIKE_REVIEW_SUCCESS:
        return { loading: false, userlikereview: action.payload };
      case USER_LIKE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PutlikeReviewReducer(state = { likereview: {} }, action) {
    switch (action.type) {
      case NUMBER_LIKE_REVIEW_REQUEST:
        return { loading: true, likereview: {} };
      case NUMBER_LIKE_REVIEW_SUCCESS:
        return { loading: false, likereview: action.payload };
      case NUMBER_LIKE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PushuserlikeReviewReducer(state = { push_userlikereview: {} }, action) {
    switch (action.type) {
      case PUSH_USER_LIKE_REVIEW_REQUEST:
        return { loading: true, push_userlikereview: {} };
      case PUSH_USER_LIKE_REVIEW_SUCCESS:
        return { loading: false, push_userlikereview: action.payload };
      case PUSH_USER_LIKE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {
    commentReviewgetReducer,commentReviewpostReducer,getuserlikeReviewReducer,PutlikeReviewReducer,PushuserlikeReviewReducer
}