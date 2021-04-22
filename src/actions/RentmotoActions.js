import{
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_TOTALROW_REQUEST,
    PRODUCT_TOTALROW_SUCCESS,
    PRODUCT_TOTALROW_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL} from '../constants/RentmotoConstan';
import axios from 'axios';
const listProducts =(pagenumber) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST, payload:pagenumber});
        const {data} = await axios.get("http://localhost:4000/api/products/?_page="+ pagenumber +"&_limit=6");
        dispatch({type:PRODUCT_LIST_SUCCESS, payload:data.data
      });
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}
const totalRow =() => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_TOTALROW_REQUEST});
        const {data} = await axios.get("http://localhost:4000/api/products/?_page=1&_limit=5");
        dispatch({type:PRODUCT_TOTALROW_SUCCESS, payload:data.pagination
      });
      localStorage.setItem('total', JSON.stringify(data.pagination));
    }
    catch(error){
        dispatch({ type: PRODUCT_TOTALROW_FAIL, payload: error.message });
    }
}
const productdetail =(id) => async (dispatch) =>{
    try{
        dispatch({type: PRODUCT_DETAIL_REQUEST, payload:id});
        const {data} = await axios.get("http://localhost:4000/api/products/"+id);
        dispatch({type:PRODUCT_DETAIL_SUCCESS, payload:data
      });
    }
    catch(error){
        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.message });
    }
}
export{
    listProducts,
    totalRow,
    productdetail
}