import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {userSigninReducers,
        userRegisterReducer,
        userprofileReducer} from './reducers/userReducers';
import {productListReducer,
        toltalrowReducer,
        productDetailReducer} from './reducers/RentmotoReducers';
import {filterproduct,
        SearchReducer,
        filterfoodsReducer} from './reducers/FilterReducers';
import {commentpostReducer,
        commentgetReducer,
        getuserlikeReducer,
        PutlikeReducer,
        PushuserlikeReducer} from './reducers/CommentReducer';
import {cartReducer} from './reducers/CartReducer';
import {ReviewDLTCReducer, 
        ReviewDTLSReducer,
        ReviewListDetailReducer,
        ReviewListReducer} from './reducers/ReviewReducer';
import {FoodListReducer,
        FoodDetailReducer,
        FoodMenuReducer,
        FoodReviewByCBReducer} from './reducers/FoodReducer';
import {commentFoodgetReducer,
        commentfoodpostReducer,getuserlikefoodReducer,PutlikefoodReducer,PushuserlikefoodReducer} from './reducers/CommentfoodReducer';
import {ReviewDetail_2_Reducer,ReviewDetail_1_Reducer} from './reducers/ReviewDetailReducer'
import {commentReviewgetReducer,
        commentReviewpostReducer,
        getuserlikeReviewReducer,
        PutlikeReviewReducer,
        PushuserlikeReviewReducer} from './reducers/CommentreviewReducer'
import {GettodolistReducer,
        PosttodolistReducer,
        GetDataTodolistReducer,
        PostDataTodolistReducer,
        PutDataTodolistReducer,
        GetDataTodolistIDReducer} from './reducers/NoteReducer'       
import {
        forumgetbycityreducer,
        forumpostreducer,
        forumgetbyIdreducer,
        getuserlikeforumreducer,
        postuserlikeforumreducer,
        putlikeforumreducer,
        forumgetbynamereducer
} from './reducers/ForumReducer'
import {
        commentforumpostReducer,
        commentforumgetReducer,
        getuserlikecommentforumReducer,
        putlikecommentforumReducer,
        pushuserlikecommentforumReducer

} from './reducers/CommentforumReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    totalRow: {
        total: localStorage.getItem('total')
          ? JSON.parse(localStorage.getItem('total'))
          : null,
      },
      userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : [],
      },
      cart :{
        cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
      }
  };
const reducer = combineReducers({
    userSignin: userSigninReducers,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    TotalRow:toltalrowReducer,
    productfilter:filterproduct,
    productsearch:SearchReducer,
    detailproduct:productDetailReducer,
    userprofile:userprofileReducer,
    commentpost:commentpostReducer,
    commentget: commentgetReducer,
    cart: cartReducer,
    listreviewDLTC:ReviewDLTCReducer,
    listreviewDTLS:ReviewDTLSReducer,
    listReviewDetail:ReviewListDetailReducer,
    listfood:FoodListReducer,
    Getuserlike:getuserlikeReducer,
    GetLike:PutlikeReducer,
    PushUserLike:PushuserlikeReducer,
    FoodDetail:FoodDetailReducer,
    FoodFilter:filterfoodsReducer,
    CommentsFood:commentFoodgetReducer,
    CommentFoodPost:commentfoodpostReducer,
    GetUserlikefood:getuserlikefoodReducer,
    Pushuserlikefood:PushuserlikefoodReducer,
    PutLikeFood:PutlikefoodReducer,
    ListMenuFood:FoodMenuReducer,
    Review_D_1:ReviewDetail_1_Reducer,
    Review_D_2:ReviewDetail_2_Reducer,
    CommentReview:commentReviewgetReducer,
    CommentReviewPost:commentReviewpostReducer,
    GetUserlikeReview:getuserlikeReviewReducer,
    PushuserlikeReview:PushuserlikeReviewReducer,
    PutLikeReview:PutlikeReviewReducer,
    Todolist_Get:GettodolistReducer,
    Posttodolist:PosttodolistReducer,
    Data_todolist_Get:GetDataTodolistReducer,
    Post_Data_Todolist:PostDataTodolistReducer,
    Put_Data_Todolist:PutDataTodolistReducer,
    GetDatatodolist_id:GetDataTodolistIDReducer,
    reviewList:ReviewListReducer,
    forumbycity: forumgetbycityreducer,
    forumPost:forumpostreducer,
    forumcommentpost:commentforumpostReducer,
    forumcommentget:commentforumgetReducer,
    forrumgetbyid:forumgetbyIdreducer,
    getuserlikecommentforum:getuserlikecommentforumReducer,
    putlikecommentforum:putlikecommentforumReducer,
    pushuserlikecommentforum:pushuserlikecommentforumReducer,
    getuserlikeforum:getuserlikeforumreducer,
    postuserlikeforum:postuserlikeforumreducer,
    putlikeforum:putlikeforumreducer,
    FoodReviewByCB:FoodReviewByCBReducer,
    forumgetbyname:forumgetbynamereducer
});
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
