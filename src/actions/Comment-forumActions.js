import axios from 'axios';
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

const postCommentForum = (forumId, name, comment, date, time, like, avartar) => async (dispatch) => {
    try {
        dispatch({ type: COMMENT_FORUM_POST_REQUEST, payload: { forumId, name, comment, date, time, like, avartar } });
        const { data } = await axios.post("http://localhost:4000/api/Comment_Forum", { forumId, name, comment, date, time, like, avartar });
        dispatch({
            type: COMMENT_FORUM_POST_SUCCESS, payload: data
        });

    }
    catch (error) {
        dispatch({ type: COMMENT_FORUM_POST_FAIL, payload: error.message });
    }
}

const getCommentForum = (forumId) => async (dispatch) => {
    try {
        dispatch({ type: COMMENT_FORUM_GET_REQUEST, payload:forumId});
        const { data } = await axios.get("http://localhost:4000/api/Comment_Forum?forumId="+forumId);
        dispatch({
            type: COMMENT_FORUM_GET_SUCCESS, payload: data
        });

    }
    catch (error) {
        dispatch({ type: COMMENT_FORUM_GET_FAIL, payload: error.message });
    }
}

const getUserLikeCommentForum = (userId) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_LIKE_COMMENT_FORUM_REQUEST, payload:userId});
        const { data } = await axios.get("http://localhost:4000/api/User_like_Comment_forum?userId="+userId);
        dispatch({
            type: GET_USER_LIKE_COMMENT_FORUM_SUCCESS, payload: data
        });

    }
    catch (error) {
        dispatch({ type: GET_USER_LIKE_COMMENT_FORUM_FAIL, payload: error.message });
    }
}

const PutLikeCommentForum = (commentId,like) => async (dispatch) => {
    try {
        dispatch({ type: PUT_LIKE_COMMENT_FORUM_REQUEST, payload:{commentId,like}});
        const { data } = await axios.patch(`http://localhost:4000/api/Comment_Forum/${commentId}`,{like});
        dispatch({
            type: PUT_LIKE_COMMENT_FORUM_SUCCESS, payload: data
        });

    }
    catch (error) {
        dispatch({ type: PUT_LIKE_COMMENT_FORUM_FAIL, payload: error.message });
    }
}

const PushUserLikeCommentForum = (Comment_ForumId,userId) => async (dispatch) => {
    try {
        dispatch({ type: PUSH_USER_LIKE_COMMENT_FORUM_REQUEST, payload:{Comment_ForumId,userId}});
        const { data } = await axios.post(`http://localhost:4000/api/User_like_Comment_forum`,{Comment_ForumId,userId});
        dispatch({
            type: PUSH_USER_LIKE_COMMENT_FORUM_SUCCESS, payload: data
        });

    }
    catch (error) {
        dispatch({ type: PUSH_USER_LIKE_COMMENT_FORUM_FAIL, payload: error.message });
    }
}
export{
    postCommentForum,
    getCommentForum,
    getUserLikeCommentForum,
    PutLikeCommentForum,
    PushUserLikeCommentForum
}
