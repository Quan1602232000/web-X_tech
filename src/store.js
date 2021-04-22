import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {userSigninReducers,
    userRegisterReducer,userprofileReducer} from './reducers/userReducers';
import {productListReducer,toltalrowReducer,productDetailReducer} from './reducers/RentmotoReducers';
import { filterproduct,SearchReducer} from './reducers/FilterReducers';
import {commentpostReducer,commentgetReducer} from './reducers/CommentReducer';
import {cartReducer} from './reducers/CartReducer'


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
    cart: cartReducer
});
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
