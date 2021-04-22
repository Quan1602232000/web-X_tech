import {
    FILTER_MOTO_REQUEST,
    FILTER_MOTO_GIA_SUCCESS,
    FILTER_MOTO_BRAND_SUCCESS,
    FILTER_MOTO_NOTALL_SUCCESS,
    FILTER_MOTO_ALL_SUCCESS,
    SEARCH_MOTO_ALL_SUCCESS,
    SEARCH_MOTO_ALL_FAIL,
    SEARCH_MOTO_ALL_REQUEST,
    FILTER_MOTO_FAIL
} from '../constants/FilterConstan';
import axios from 'axios';
const Filtermoto = (loaixe, gia, pagenumber, searchtext) => async (dispatch) => {
    try {
        dispatch({ type: FILTER_MOTO_REQUEST, payload: { loaixe, gia, pagenumber, searchtext } });

        if (loaixe == 'ALL' && gia == 'ALL') {
            const { data } = await axios.get("http://localhost:4000/api/products/?_page=" + pagenumber + "&_limit=6");
            dispatch({
                type: FILTER_MOTO_ALL_SUCCESS, payload: data.data
            });
        }
        else if (loaixe == 'ALL' || gia == 'ALL') {
            if (loaixe == 'ALL') {
                const { data } = await axios.get("http://localhost:4000/api/products/?_sort=price&_order=" + gia + "&_page=" + pagenumber + "&_limit=6")
                dispatch({
                    type: FILTER_MOTO_GIA_SUCCESS, payload: data.data
                });
            }
            else {
                const { data } = await axios.get("http://localhost:4000/api/products/?brand=" + loaixe + "&_page=" + pagenumber + "&_limit=6")
                dispatch({
                    type: FILTER_MOTO_BRAND_SUCCESS, payload: data.data
                });
            }
        }
        // else if(loaixe=='Tất cả'|| gia!='Tất cả'){
        //     const {data} =await axios.get("http://localhost:4000/api/products/?_sort=price&_order="+gia+"&_page="+pagenumber+"&_limit=6")
        //     dispatch({type:FILTER_MOTO_GIA_SUCCESS, payload:data.data
        //     });}
        // else if(gia=='Tất cả'||loaixe!='Tất cả'){
        //     const {data} =await axios.get("http://localhost:4000/api/products/?brand="+ loaixe+"&_page="+pagenumber+"&_limit=6")
        //     dispatch({type:FILTER_MOTO_BRAND_SUCCESS, payload:data.data
        //     });          
        // }
        else if (loaixe != 'ALL' || gia != 'ALL') {
            const { data } = await axios.get("http://localhost:4000/api/products/?_sort=price&_order=" + gia + "&brand=" + loaixe + "&_page=" + pagenumber + "&_limit=6")
            dispatch({
                type: FILTER_MOTO_NOTALL_SUCCESS, payload: data.data
            });
        }
    }
    catch (error) {
        dispatch({ type: FILTER_MOTO_FAIL, payload: error.message });
    }
}
const SearchName =(searchtext,pagenumber)=> async (dispatch)=>{
    try{
        dispatch({ type: SEARCH_MOTO_ALL_REQUEST, payload: { searchtext } });
        const { data } = await axios.get("http://localhost:4000/api/products/?name="+searchtext+"&_page=" + pagenumber + "&_limit=6");
            dispatch({
                type: SEARCH_MOTO_ALL_SUCCESS, payload: data.data
            });
    }
    catch (error) {
        dispatch({ type: SEARCH_MOTO_ALL_FAIL, payload: error.message });
    }
}
export {
    Filtermoto,
    SearchName
}