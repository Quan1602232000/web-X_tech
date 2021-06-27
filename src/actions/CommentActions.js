import axios from "axios";
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
const createComment = (productId, name, comment, date, time,rating,like,avartar) => async (dispatch) => {
    dispatch({ type: COMMENT_POST_REQUEST, payload: {productId, name, comment, date, time,rating,like,avartar } });
    try {
        const { data } = await axios.post('http://localhost:4000/api/comments', {
            productId, name, comment, date, time,rating,like,avartar
        });
        dispatch({ type: COMMENT_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COMMENT_POST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
const getcomment =(productId)=> async (dispatch)=>{
    try{
        dispatch({ type: COMMENT_GET_REQUEST, payload:productId });
        const { data } = await axios.get("http://localhost:4000/api/comments/?productId="+productId);
            dispatch({
                type: COMMENT_GET_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: COMMENT_GET_FAIL, payload: error.message });
    }
}
const getUserLike=(userId)=>async (dispatch)=>{
    try{
        dispatch({ type: USER_LIKE_REQUEST, payload:userId });
        const { data } = await axios.get("http://localhost:4000/api/user_like/?userId="+userId);
            dispatch({
                type: USER_LIKE_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: USER_LIKE_FAIL, payload: error.message });
    }
}
const pushUserLike=(commentId,userId)=>async (dispatch)=>{
    try{
        dispatch({ type: PUSH_USER_LIKE_MOTO_REQUEST, payload:{commentId,userId} });
        const { data } = await axios.post("http://localhost:4000/api/user_like",{commentId,userId});
            dispatch({
                type: PUSH_USER_LIKE__MOTO_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: PUSH_USER_LIKE_MOTO_FAIL, payload: error.message });
    }
}
const PutLike=(commentId,like)=>async (dispatch)=>{
    try{
        dispatch({ type: NUMBER_LIKE_MOTO_REQUEST, payload:{commentId,like}});
        const { data } = await axios.patch("http://localhost:4000/api/comments/"+commentId,{like});
            dispatch({
                type: NUMBER_LIKE__MOTO_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NUMBER_LIKE_MOTO_FAIL, payload: error.message });
    }
}

export {
    createComment,getcomment,getUserLike,PutLike,pushUserLike
}