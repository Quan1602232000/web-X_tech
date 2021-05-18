import{
    FOOD_REVIEW_REQUEST,
    FOOD_REVIEW_SUCCESS,
    FOOD_REVIEW_FAIL,
    FOOD_REVIEW_DETAIL_REQUEST,
    FOOD_REVIEW_DETAIL_SUCCESS,
    FOOD_REVIEW_DETAIL_FAIL,
    FOOD_REVIEW_MENU_REQUEST,
    FOOD_REVIEW_MENU_SUCCESS,
    FOOD_REVIEW_MENU_FAIL
    } from '../constants/FoodConstant';
import axios from 'axios';

const foodlistreview =(city,brand,page) => async (dispatch) =>{
    try{
        dispatch({type: FOOD_REVIEW_REQUEST, payload:{city,brand,page}});
        if(page==0){
            const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?city="+city+"&brand="+brand);
            dispatch({type:FOOD_REVIEW_SUCCESS, payload:data
            });
        }
        else{
            const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/foods/?city="+city+"&brand="+brand+"&_page=" + page + "&_limit=4");
            dispatch({type:FOOD_REVIEW_SUCCESS, payload:data.data
            });
        }       
            
    }
    catch(error){
        dispatch({ type: FOOD_REVIEW_FAIL, payload: error.message });
    }
}
const foodreviewdetail =(foodId) => async (dispatch) =>{
    try{
        dispatch({type: FOOD_REVIEW_DETAIL_REQUEST, payload:foodId});
        const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/foods/"+foodId);
            dispatch({type:FOOD_REVIEW_DETAIL_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: FOOD_REVIEW_DETAIL_FAIL, payload: error.message });
    }
}
const foodreviewmenu =(foodId) => async (dispatch) =>{
    try{
        dispatch({type: FOOD_REVIEW_MENU_REQUEST, payload:foodId});
        const {data} = await axios.get("https://divadi-demo.herokuapp.com/api/menu/?foodId="+foodId);
            dispatch({type:FOOD_REVIEW_MENU_SUCCESS, payload:data
            });
    }
    catch(error){
        dispatch({ type: FOOD_REVIEW_MENU_FAIL, payload: error.message });
    }
}
export{
    foodlistreview,foodreviewdetail,foodreviewmenu
}