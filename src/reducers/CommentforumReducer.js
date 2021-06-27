import {
    COMMENT_FORUM_POST_REQUEST,
    COMMENT_FORUM_POST_SUCCESS,
    COMMENT_FORUM_POST_FAIL,
    COMMENT_FORUM_GET_REQUEST,
    COMMENT_FORUM_GET_SUCCESS,
    COMMENT_FORUM_GET_FAIL,
    GET_USER_LIKE_COMMENT_FORUM_REQUEST,
    GET_USER_LIKE_COMMENT_FORUM_SUCCESS,
    GET_USER_LIKE_COMMENT_FORUM_FAIL,
    PUT_LIKE_COMMENT_FORUM_REQUEST,
    PUT_LIKE_COMMENT_FORUM_SUCCESS,
    PUT_LIKE_COMMENT_FORUM_FAIL,
    PUSH_USER_LIKE_COMMENT_FORUM_REQUEST,
    PUSH_USER_LIKE_COMMENT_FORUM_SUCCESS,
    PUSH_USER_LIKE_COMMENT_FORUM_FAIL
} from '../constants/CommentForumConstants';

function commentforumpostReducer(state = { commentforumCreate: {} }, action) {
    switch (action.type) {
        case COMMENT_FORUM_POST_REQUEST:
            return { loading: true, commentforumCreate: {} };
        case COMMENT_FORUM_POST_SUCCESS:
            return { loading: false, commentforumCreate: action.payload };
        case COMMENT_FORUM_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function commentforumgetReducer(state = { commentforumget: [] }, action) {
    switch (action.type) {
        case COMMENT_FORUM_GET_REQUEST:
            return { loading: true, commentforumget: [] };
        case COMMENT_FORUM_GET_SUCCESS:
            return { loading: false, commentforumget: action.payload };
        case COMMENT_FORUM_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function getuserlikecommentforumReducer(state = { UL_Comment_Forum: [] }, action) {
    switch (action.type) {
        case GET_USER_LIKE_COMMENT_FORUM_REQUEST:
            return { loading: true, UL_Comment_Forum: [] };
        case GET_USER_LIKE_COMMENT_FORUM_SUCCESS:
            return { loading: false, UL_Comment_Forum: action.payload };
        case GET_USER_LIKE_COMMENT_FORUM_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function putlikecommentforumReducer(state = { Like_Put_Comment_Forum: {} }, action) {
    switch (action.type) {
        case PUT_LIKE_COMMENT_FORUM_REQUEST:
            return { loading: true, User_Like_Comment: {} };
        case PUT_LIKE_COMMENT_FORUM_SUCCESS:
            return { loading: false, User_Like_Comment: action.payload };
        case PUT_LIKE_COMMENT_FORUM_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function pushuserlikecommentforumReducer(state = { Post_UL_Comment_Forum: {} }, action) {
    switch (action.type) {
        case PUSH_USER_LIKE_COMMENT_FORUM_REQUEST:
            return { loading: true, Post_UL_Comment_Forum: {} };
        case PUSH_USER_LIKE_COMMENT_FORUM_SUCCESS:
            return { loading: false, Post_UL_Comment_Forum: action.payload };
        case PUSH_USER_LIKE_COMMENT_FORUM_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { commentforumpostReducer,
    commentforumgetReducer,
    getuserlikecommentforumReducer,
    putlikecommentforumReducer,
    pushuserlikecommentforumReducer
};