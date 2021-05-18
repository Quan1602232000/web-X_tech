import axios from "axios";
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

const getcommentreview =(reviewId)=> async (dispatch)=>{
    try{
        dispatch({ type: COMMENT_REVIEW_GET_REQUEST, payload:reviewId });
        const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/comment-review/?reviewId="+reviewId);
            dispatch({
                type: COMMENT_REVIEW_GET_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: COMMENT_REVIEW_GET_FAIL, payload: error.message });
    }
}
const createCommentreview = (reviewId, name, comment, date, time,rating,like,avartar) => async (dispatch) => {
    dispatch({ type: COMMENT_REVIEW_POST_REQUEST, payload: {reviewId, name, comment, date, time,rating,like,avartar } });
    try {
        const { data } = await axios.post('https://divadi-demo.herokuapp.com/api/comment-review', {
            reviewId, name, comment, date, time,rating,like,avartar
        });
        dispatch({ type: COMMENT_REVIEW_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COMMENT_REVIEW_POST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
const getUserLikereview=(userId)=>async (dispatch)=>{
    try{
        dispatch({ type: USER_LIKE_REVIEW_REQUEST, payload:userId });
        const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/user_like_review/?userId="+userId);
            dispatch({
                type: USER_LIKE_REVIEW_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: USER_LIKE_REVIEW_FAIL, payload: error.message });
    }
}
const pushUserLikereview=(commentId,userId)=>async (dispatch)=>{
    try{
        dispatch({ type: PUSH_USER_LIKE_REVIEW_REQUEST, payload:{commentId,userId} });
        const { data } = await axios.post("https://divadi-demo.herokuapp.com/api/user_like_review",{commentId,userId});
            dispatch({
                type: PUSH_USER_LIKE_REVIEW_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type:PUSH_USER_LIKE_REVIEW_FAIL, payload: error.message });
    }
}
const PutLikereview=(commentId,like)=>async (dispatch)=>{
    try{
        dispatch({ type: NUMBER_LIKE_REVIEW_REQUEST, payload:{commentId,like}});
        const { data } = await axios.patch("https://divadi-demo.herokuapp.com/api/comment-review/"+commentId,{like});
            dispatch({
                type: NUMBER_LIKE_REVIEW_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NUMBER_LIKE_REVIEW_FAIL, payload: error.message });
    }
}
export {
    getcommentreview,
    createCommentreview,
    getUserLikereview,
    pushUserLikereview,
    PutLikereview}