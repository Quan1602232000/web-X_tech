import{
    REVIEW_DETAIL_1_REQUEST,
    REVIEW_DETAIL_1_SUCCESS,
    REVIEW_DETAIL_1_FAIL,
    REVIEW_DETAIL_2_REQUEST,
    REVIEW_DETAIL_2_SUCCESS,
    REVIEW_DETAIL_2_FAIL
    } from '../constants/ReviewDetailConstant';
    function ReviewDetail_1_Reducer(state = { Review_Detail_1: [] }, action) {
        switch (action.type) {
            case REVIEW_DETAIL_1_REQUEST:
                return { loading: true, Review_Detail_1: [] };
            case REVIEW_DETAIL_1_SUCCESS:
                return { loading: false, Review_Detail_1: action.payload };
            case REVIEW_DETAIL_1_FAIL:
                return { loading: false, error: action.payload };
            default: return state;
        }
    }
    function ReviewDetail_2_Reducer(state = { Review_Detail_2: [] }, action) {
        switch (action.type) {
            case REVIEW_DETAIL_2_REQUEST:
                return { loading: true, Review_Detail_2: [] };
            case REVIEW_DETAIL_2_SUCCESS:
                return { loading: false, Review_Detail_2: action.payload };
            case REVIEW_DETAIL_2_FAIL:
                return { loading: false, error: action.payload };
            default: return state;
        }
    }
    export { ReviewDetail_1_Reducer, ReviewDetail_2_Reducer};