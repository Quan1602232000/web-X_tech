import{
    FORUM_GET_BY_CITY_REQUEST,
    FORUM_GET_BY_CITY_SUCCESS,
    FORUM_GET_BY_CITY_FAIL,
    FORUM_POST_BY_BRAND_AND_PALCE_REQUEST,
    FORUM_POST_BY_BRAND_AND_PALCE_SUCCESS,
    FORUM_POST_BY_BRAND_AND_PALCE_FAIL,
    FORUM_GET_BY_ID_REQUEST,
    FORUM_GET_BY_ID_SUCCESS,
    FORUM_GET_BY_ID_FAIL,
    FORUM_PUT_LIKE_REQUEST,
    FORUM_PUT_LIKE_SUCCESS,
    FORUM_PUT_LIKE_FAIL,
    FORUM_GET_USER_LIKE_REQUEST,
    FORUM_GET_USER_LIKE_SUCCESS,
    FORUM_GET_USER_LIKE_FAIL,
    FORUM_POST_USER_LIKE_REQUEST,
    FORUM_POST_USER_LIKE_SUCCESS,
    FORUM_POST_USER_LIKE_FAIL,
    FORUM_GET_BY_NAME_REQUEST,
    FORUM_GET_BY_NAME_SUCCESS,
    FORUM_GET_BY_NAME_FAIL
    } from '../constants/ForumConstant';

function forumgetbycityreducer(state = { Forum_By_City: [] }, action) {
    switch (action.type) {
        case FORUM_GET_BY_CITY_REQUEST:
            return { loading: true, Forum_By_City: [] };
        case FORUM_GET_BY_CITY_SUCCESS:
            return { loading: false, Forum_By_City: action.payload };
        case FORUM_GET_BY_CITY_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function forumpostreducer(state = { Forum_Post: {} }, action) {
    switch (action.type) {
        case FORUM_POST_BY_BRAND_AND_PALCE_REQUEST:
            return { loading: true, Forum_Post: {} };
        case FORUM_POST_BY_BRAND_AND_PALCE_SUCCESS:
            return { loading: false, Forum_Post: action.payload };
        case FORUM_POST_BY_BRAND_AND_PALCE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function forumgetbyIdreducer(state = { Forum_By_Id: {} }, action) {
    switch (action.type) {
        case FORUM_GET_BY_ID_REQUEST:
            return { loading: true, Forum_By_Id: {} };
        case FORUM_GET_BY_ID_SUCCESS:
            return { loading: false, Forum_By_Id: action.payload };
        case FORUM_GET_BY_ID_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function forumgetbynamereducer(state = { Forum_By_Name: [] }, action) {
    switch (action.type) {
        case FORUM_GET_BY_NAME_REQUEST:
            return { loading: true, Forum_By_Name: [] };
        case FORUM_GET_BY_NAME_SUCCESS:
            return { loading: false, Forum_By_Name: action.payload };
        case FORUM_GET_BY_NAME_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function getuserlikeforumreducer(state = { User_Like_Forum: [] }, action) {
    switch (action.type) {
        case FORUM_GET_USER_LIKE_REQUEST:
            return { loading: true, User_Like_Forum: [] };
        case FORUM_GET_USER_LIKE_SUCCESS:
            return { loading: false, User_Like_Forum: action.payload };
        case FORUM_GET_USER_LIKE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function postuserlikeforumreducer(state = { Post_UL_forum: {} }, action) {
    switch (action.type) {
        case FORUM_POST_USER_LIKE_REQUEST:
            return { loading: true, Post_UL_forum: {} };
        case FORUM_POST_USER_LIKE_SUCCESS:
            return { loading: false, Post_UL_forum: action.payload };
        case FORUM_POST_USER_LIKE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function putlikeforumreducer(state = { Put_Like_Forum: {} }, action) {
    switch (action.type) {
        case FORUM_PUT_LIKE_REQUEST:
            return { loading: true, Put_Like_Forum: {} };
        case FORUM_PUT_LIKE_SUCCESS:
            return { loading: false, Put_Like_Forum: action.payload };
        case FORUM_PUT_LIKE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export { forumgetbycityreducer,
         forumpostreducer,
         forumgetbyIdreducer,
         getuserlikeforumreducer,
         postuserlikeforumreducer,
         putlikeforumreducer,
         forumgetbynamereducer};