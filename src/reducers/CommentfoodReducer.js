import {
    COMMENT_FOOD_GET_REQUEST,
    COMMENT_FOOD_GET_SUCCESS,
    COMMENT_FOOD_GET_FAIL,
    COMMENT_FOOD_POST_REQUEST,
    COMMENT_FOOD_POST_SUCCESS,
    COMMENT_FOOD_POST_FAIL,
    USER_LIKE_FOOD_REQUEST,
    USER_LIKE_FOOD_SUCCESS,
    USER_LIKE_FOOD_FAIL,
    NUMBER_LIKE_FOOD_REQUEST,
    NUMBER_LIKE_FOOD_SUCCESS,
    NUMBER_LIKE_FOOD_FAIL,
    PUSH_USER_LIKE_FOOD_REQUEST,
    PUSH_USER_LIKE__FOOD_SUCCESS,
    PUSH_USER_LIKE_FOOD_FAIL
} from '../constants/CommentFoodConstant';
function commentFoodgetReducer(state = { comments_Food: [] }, action) {
    switch (action.type) {
      case COMMENT_FOOD_GET_REQUEST:
        return { loading: true, comments_Food: [] };
      case COMMENT_FOOD_GET_SUCCESS:
        return { loading: false, comments_Food: action.payload };
      case COMMENT_FOOD_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function commentfoodpostReducer(state = { commentfoodCreate: {} }, action) {
    switch (action.type) {
      case COMMENT_FOOD_POST_REQUEST:
        return { loading: true, commentfoodCreate: {} };
      case COMMENT_FOOD_POST_SUCCESS:
        return { loading: false, commentfoodCreate: action.payload };
      case COMMENT_FOOD_POST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function getuserlikefoodReducer(state = { userlikefood: [] }, action) {
    switch (action.type) {
      case USER_LIKE_FOOD_REQUEST:
        return { loading: true, userlikefood: [] };
      case USER_LIKE_FOOD_SUCCESS:
        return { loading: false, userlikefood: action.payload };
      case USER_LIKE_FOOD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PutlikefoodReducer(state = { likefood: {} }, action) {
    switch (action.type) {
      case NUMBER_LIKE_FOOD_REQUEST:
        return { loading: true, likefood: {} };
      case NUMBER_LIKE_FOOD_SUCCESS:
        return { loading: false, likefood: action.payload };
      case NUMBER_LIKE_FOOD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function PushuserlikefoodReducer(state = { push_userlikefood: {} }, action) {
    switch (action.type) {
      case PUSH_USER_LIKE_FOOD_REQUEST:
        return { loading: true, push_userlikefood: {} };
      case PUSH_USER_LIKE__FOOD_SUCCESS:
        return { loading: false, push_userlikefood: action.payload };
      case PUSH_USER_LIKE_FOOD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {
    commentFoodgetReducer,commentfoodpostReducer,getuserlikefoodReducer,PutlikefoodReducer,PushuserlikefoodReducer
}