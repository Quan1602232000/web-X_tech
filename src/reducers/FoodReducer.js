import{
    FOOD_REVIEW_REQUEST,
    FOOD_REVIEW_SUCCESS,
    FOOD_REVIEW_FAIL,
    FOOD_REVIEW_DETAIL_REQUEST,
    FOOD_REVIEW_DETAIL_SUCCESS,
    FOOD_REVIEW_DETAIL_FAIL,
    FOOD_REVIEW_MENU_REQUEST,
    FOOD_REVIEW_MENU_SUCCESS,
    FOOD_REVIEW_MENU_FAIL,
    FOOD_REVIEW_BY_CB_REQUEST,
    FOOD_REVIEW_BY_CB_SUCCESS,
    FOOD_REVIEW_BY_CB_FAIL
    } from '../constants/FoodConstant';

function FoodListReducer(state = { Food_list: [] }, action) {
    switch (action.type) {
        case FOOD_REVIEW_REQUEST:
            return { loading: true, Food_list: [] };
        case FOOD_REVIEW_SUCCESS:
            return { loading: false, Food_list: action.payload };
        case FOOD_REVIEW_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
function FoodDetailReducer(state = { Food_detail: {} }, action) {
    switch (action.type) {
        case FOOD_REVIEW_DETAIL_REQUEST:
            return { loading: true, Food_detail: {} };
        case FOOD_REVIEW_DETAIL_SUCCESS:
            return { loading: false, Food_detail: action.payload };
        case FOOD_REVIEW_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
function FoodMenuReducer(state = { Food_Menu: [] }, action) {
    switch (action.type) {
        case FOOD_REVIEW_MENU_REQUEST:
            return { loading: true, Food_Menu: [] };
        case FOOD_REVIEW_MENU_SUCCESS:
            return { loading: false, Food_Menu: action.payload };
        case FOOD_REVIEW_MENU_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function FoodReviewByCBReducer(state = { Food_By_CB: [] }, action) {
    switch (action.type) {
        case FOOD_REVIEW_BY_CB_REQUEST:
            return { loading: true, Food_By_CB: [] };
        case FOOD_REVIEW_BY_CB_SUCCESS:
            return { loading: false, Food_By_CB: action.payload };
        case FOOD_REVIEW_BY_CB_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export { FoodListReducer,
         FoodDetailReducer,
         FoodMenuReducer,
         FoodReviewByCBReducer};