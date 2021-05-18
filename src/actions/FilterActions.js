import {
    FILTER_MOTO_REQUEST,
    FILTER_MOTO_GIA_SUCCESS,
    FILTER_MOTO_BRAND_SUCCESS,
    FILTER_MOTO_NOTALL_SUCCESS,
    FILTER_MOTO_ALL_SUCCESS,
    SEARCH_MOTO_ALL_SUCCESS,
    SEARCH_MOTO_ALL_FAIL,
    SEARCH_MOTO_ALL_REQUEST,
    FILTER_MOTO_FAIL,
    FILTER_FOOD_REQUEST,
    FILTER_FOOD_GIA_SUCCESS,
    FILTER_FOOD_RATING_SUCCESS,
    FILTER_FOOD_NOTALL_SUCCESS,
    FILTER_FOOD_ALL_SUCCESS,
    FILTER_FOOD_FAIL
} from '../constants/FilterConstan';
import axios from 'axios';
const Filtermoto = (loaixe, gia, pagenumber,city) => async (dispatch) => {
    try {
        dispatch({ type: FILTER_MOTO_REQUEST, payload: { loaixe, gia, pagenumber, city } });

        if (loaixe == 'ALL' && gia == 'ALL') {
            const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/products/?city="+city+"&_page=" + pagenumber + "&_limit=6");
            dispatch({
                type: FILTER_MOTO_ALL_SUCCESS, payload: data.data
            });
        }
        else if (loaixe == 'ALL' || gia == 'ALL') {
            if (loaixe == 'ALL') {
                const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/products/?_sort=price&_order=" + gia + "&city="+city+"&_page=" + pagenumber + "&_limit=6")
                dispatch({
                    type: FILTER_MOTO_GIA_SUCCESS, payload: data.data
                });
            }
            else {
                const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/products/?brand=" + loaixe + "&city="+city+"&_page=" + pagenumber + "&_limit=6")
                dispatch({
                    type: FILTER_MOTO_BRAND_SUCCESS, payload: data.data
                });
            }
        }
        else if (loaixe != 'ALL' || gia != 'ALL') {
            const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/products/?_sort=price&_order=" + gia + "&brand=" + loaixe + "&city="+city+"&_page=" + pagenumber + "&_limit=6")
            dispatch({
                type: FILTER_MOTO_NOTALL_SUCCESS, payload: data.data
            });
        }
    }
    catch (error) {
        dispatch({ type: FILTER_MOTO_FAIL, payload: error.message });
    }
}
const FilterFood = (city,brand,rating,price,page) => async (dispatch) => {
    try {
        dispatch({ type: FILTER_FOOD_REQUEST, payload: { city,brand,rating,price,page } });

        if (rating == 'ALL' && price == 'ALL') {
            const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?city="+city+"&brand="+brand+"&_page=" + page + "&_limit=4");
            dispatch({
                type: FILTER_FOOD_ALL_SUCCESS, payload: data.data
            });
        }
        else if (rating == 'ALL' || price == 'ALL') {
            if (rating == 'ALL') {
                const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?sort=" + price + "&city="+city+"&brand="+brand+"&_page=" + page + "&_limit=4")
                dispatch({
                    type: FILTER_FOOD_GIA_SUCCESS, payload: data.data
                });
            }
            else {
                const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?brand=" + brand + "&city="+city+"&rating="+rating+"&_page=" + page + "&_limit=4")
                dispatch({
                    type: FILTER_FOOD_RATING_SUCCESS, payload: data.data
                });
            }
        }
        else if (rating != 'ALL' || price != 'ALL') {
            const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?sort=" + price + "&brand=" + brand + "&city="+city+"&rating="+rating+"&_page=" + page + "&_limit=4")
            dispatch({
                type: FILTER_FOOD_NOTALL_SUCCESS, payload: data.data
            });
        }
    }
    catch (error) {
        dispatch({ type: FILTER_FOOD_FAIL, payload: error.message });
    }
}
const SearchName =(searchtext,pagenumber,city)=> async (dispatch)=>{
    try{
        dispatch({ type: SEARCH_MOTO_ALL_REQUEST, payload: { searchtext,pagenumber,city } });
        const { data } = await axios.get("https://divadi-demo.herokuapp.com/api/products/?name="+searchtext+"&city="+city+"&_page=" + pagenumber + "&_limit=6");
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
    SearchName,
    FilterFood
}