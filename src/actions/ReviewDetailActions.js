import{
    REVIEW_DETAIL_1_REQUEST,
    REVIEW_DETAIL_1_SUCCESS,
    REVIEW_DETAIL_1_FAIL,
    REVIEW_DETAIL_2_REQUEST,
    REVIEW_DETAIL_2_SUCCESS,
    REVIEW_DETAIL_2_FAIL
    } from '../constants/ReviewDetailConstant';
    import axios from 'axios';

const ReviewDetail_1=(ReviewId) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_DETAIL_1_REQUEST, payload:ReviewId});
        const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/Detail_Review_1/?reviewId="+ReviewId);
            dispatch({type:REVIEW_DETAIL_1_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_DETAIL_1_FAIL, payload: error.message });
    }
}
const ReviewDetail_2=(ReviewId) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_DETAIL_2_REQUEST, payload:ReviewId});
        const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/Detail_Review_2/?reviewId="+ReviewId);
            dispatch({type:REVIEW_DETAIL_2_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_DETAIL_2_FAIL, payload: error.message });
    }
}
export{
    ReviewDetail_1,
    ReviewDetail_2
}