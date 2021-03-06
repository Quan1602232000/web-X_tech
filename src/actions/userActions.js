import axios from "axios";
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNOUT,USER_USERPROFILE_REQUEST,USER_USERPROFILE_SUCCESS,USER_USERPROFILE_FAIL
} from '../constants/userConstant'
const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.get('http://localhost:4000/api/users?email=' + email + '&password=' + password)
    if (data.length > 0) {
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data));
    }
    else {
      alert('tài khoản hoặc mật khẩu của bạn không đúng')
    }
  }
  catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
const register = (displayName, email, password,image) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('http://localhost:4000/api/users', {
      displayName, email, password, image
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    document.location.href = '/signin';
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
const getuserprofile =(userid)=> async(dispatch)=>{
  dispatch({ type: USER_USERPROFILE_REQUEST, payload: userid });
  try {
    const { data } = await axios.get('http://localhost:4000/api/userprofiles/?userId='+userid);
    dispatch({ type: USER_USERPROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_USERPROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  //localStorage.removeItem('shippingAddress');
  dispatch({ type: USER_SIGNOUT });
  document.location.href = '/signin';
};
export { signin, register, signout,getuserprofile };