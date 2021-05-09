import{
    REVIEW_DLTC_REQUEST,
    REVIEW_DLTC_SUCCESS,
    REVIEW_DLTC_FAIL,
    REVIEW_DTLS_REQUEST,
    REVIEW_DTLS_SUCCESS,
    REVIEW_DTLS_FAIL,
    REVIEW_LISTDETAIL_REQUEST,
    REVIEW_LISTDETAIL_SUCCESS,
    REVIEW_LISTDETAIL_FAIL,
    REVIEW_LIST_REQUEST,
    REVIEW_LIST_SUCCESS,
    REVIEW_LIST_FAIL
    } from '../constants/ReviewConstant';
import axios from 'axios';

const ReviewDLTC =(city,brand) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_DLTC_REQUEST, payload:{city,brand}});
        const {data} = await axios.get("http://localhost:4000/api/reviews/?city="+city+"&brand="+brand);
            dispatch({type:REVIEW_DLTC_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_DLTC_FAIL, payload: error.message });
    }
}
const ReviewDTLS =(city,brand) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_DTLS_REQUEST, payload:{city,brand}});
        const {data} = await axios.get("http://localhost:4000/api/reviews/?city="+city+"&brand="+brand);
            dispatch({type:REVIEW_DTLS_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_DTLS_FAIL, payload: error.message });
    }
}
const ReviewListDetail =(city,brand,page) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_LISTDETAIL_REQUEST, payload:{city,brand,page}});
        const {data} = await axios.get("http://localhost:4000/api/reviews/?city="+city+"&brand="+brand+"&_page=" + page + "&_limit=4");
            dispatch({type:REVIEW_LISTDETAIL_SUCCESS, payload:data.data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_LISTDETAIL_FAIL, payload: error.message });
    }
}
const ReviewList =(city) => async (dispatch) =>{
    try{
        dispatch({type: REVIEW_LIST_REQUEST, payload:city});
        const {data} = await axios.get("http://localhost:4000/api/reviews/?city="+city);
            dispatch({type:REVIEW_LIST_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: REVIEW_LIST_FAIL, payload: error.message });
    }
}
export{
    ReviewDLTC,
    ReviewDTLS,ReviewListDetail,ReviewList
}