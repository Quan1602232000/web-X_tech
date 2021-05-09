import axios from "axios";
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

const getcommentfood =(foodId)=> async (dispatch)=>{
    try{
        dispatch({ type: COMMENT_FOOD_GET_REQUEST, payload:foodId });
        const { data } = await axios.get("http://localhost:4000/api/comment-food/?foodId="+foodId);
            dispatch({
                type: COMMENT_FOOD_GET_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: COMMENT_FOOD_GET_FAIL, payload: error.message });
    }
}
const createCommentfood = (foodId, name, comment, date, time,rating,like,avartar) => async (dispatch) => {
    dispatch({ type: COMMENT_FOOD_POST_REQUEST, payload: {foodId, name, comment, date, time,rating,like,avartar} });
    try {
        const { data } = await axios.post('http://localhost:4000/api/comment-food', {
            foodId, name, comment, date, time,rating,like,avartar
        });
        dispatch({ type: COMMENT_FOOD_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COMMENT_FOOD_POST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
const getUserLikeFood=(userId)=>async (dispatch)=>{
    try{
        dispatch({ type: USER_LIKE_FOOD_REQUEST, payload:userId });
        const { data } = await axios.get("http://localhost:4000/api/user_like_food/?userId="+userId);
            dispatch({
                type: USER_LIKE_FOOD_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: USER_LIKE_FOOD_FAIL, payload: error.message });
    }
}
const pushUserLikefood=(commentId,userId)=>async (dispatch)=>{
    try{
        dispatch({ type: PUSH_USER_LIKE_FOOD_REQUEST, payload:{commentId,userId} });
        const { data } = await axios.post("http://localhost:4000/api/user_like_food",{commentId,userId});
            dispatch({
                type: PUSH_USER_LIKE__FOOD_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type:PUSH_USER_LIKE_FOOD_FAIL, payload: error.message });
    }
}
const PutLikefood=(commentId,like)=>async (dispatch)=>{
    try{
        dispatch({ type: NUMBER_LIKE_FOOD_REQUEST, payload:{commentId,like}});
        const { data } = await axios.patch("http://localhost:4000/api/comment-food/"+commentId,{like});
            dispatch({
                type: NUMBER_LIKE_FOOD_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NUMBER_LIKE_FOOD_FAIL, payload: error.message });
    }
}
export {
    getcommentfood,
    createCommentfood,
    getUserLikeFood,
    pushUserLikefood,
    PutLikefood
}