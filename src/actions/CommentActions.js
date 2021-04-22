import axios from "axios";
import {
    COMMENT_POST_REQUEST,
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAIL,
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAIL
} from '../constants/CommentConstan';
const createComment = (productId, name, comment, date, time) => async (dispatch) => {
    dispatch({ type: COMMENT_POST_REQUEST, payload: {productId, name, comment, date, time } });
    try {
        const { data } = await axios.post('http://localhost:4000/api/comments', {
            productId, name, comment, date, time
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
export {
    createComment,getcomment
}