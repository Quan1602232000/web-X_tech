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
function filterproduct(state = { products: [] }, action) {
    switch (action.type) {
        case FILTER_MOTO_REQUEST:
            return { loading: true, products: [] };
        case FILTER_MOTO_GIA_SUCCESS:
            return { loading: false, products: action.payload };
        case FILTER_MOTO_BRAND_SUCCESS:
            return { loading: false, products: action.payload };
        case FILTER_MOTO_NOTALL_SUCCESS:
            return { loading: false, products: action.payload };
        case FILTER_MOTO_ALL_SUCCESS:
            return { loading: false, products: action.payload };
        case FILTER_MOTO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
function SearchReducer(state = { searchproducts: [] }, action) {
    switch (action.type) {
        case SEARCH_MOTO_ALL_REQUEST:
            return { loading: true, searchproducts: [] };
        case SEARCH_MOTO_ALL_SUCCESS:
            return { loading: false, searchproducts: action.payload };
        case SEARCH_MOTO_ALL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export {
    filterproduct, SearchReducer
}