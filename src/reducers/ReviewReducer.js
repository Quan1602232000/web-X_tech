import{
    REVIEW_DLTC_REQUEST,
    REVIEW_DLTC_SUCCESS,
    REVIEW_DLTC_FAIL,
    REVIEW_DTLS_REQUEST,
    REVIEW_DTLS_SUCCESS,
    REVIEW_DTLS_FAIL,
    REVIEW_LISTDETAIL_REQUEST,
    REVIEW_LISTDETAIL_SUCCESS,
    REVIEW_LISTDETAIL_FAIL
    } from '../constants/ReviewConstant';
function ReviewDLTCReducer(state = { DLTC: [] }, action) {
    switch (action.type) {
        case REVIEW_DLTC_REQUEST:
            return { loading: true, DLTC: [] };
        case REVIEW_DLTC_SUCCESS:
            return { loading: false, DLTC: action.payload };
        case REVIEW_DLTC_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
function ReviewDTLSReducer(state = { DTLS: [] }, action) {
    switch (action.type) {
        case REVIEW_DTLS_REQUEST:
            return { loading: true, DTLS: [] };
        case REVIEW_DTLS_SUCCESS:
            return { loading: false, DTLS: action.payload };
        case REVIEW_DTLS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
function ReviewListDetailReducer(state = { Review_list: [] }, action) {
    switch (action.type) {
        case REVIEW_LISTDETAIL_REQUEST:
            return { loading: true, Review_list: [] };
        case REVIEW_LISTDETAIL_SUCCESS:
            return { loading: false, Review_list: action.payload };
        case REVIEW_LISTDETAIL_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export { ReviewDLTCReducer, ReviewDTLSReducer,ReviewListDetailReducer};
