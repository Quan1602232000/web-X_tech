import React,{useState,useEffect} from 'react'
import './SigupScreen.css'
import { Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {register} from '../../actions/userActions';

function SigupScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '';
    useEffect(() => {
        if (userInfo.length>0) {
          props.history.push(redirect);
        }
        return () => {
          //
        };
      }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        password==rePassword?
        dispatch(register(name,email,password)):alert('xác nhận mật khẩu không đúng')
    }
    return (
        <div>
            <section className="main-signin">
        <div className="logo text-center">
          <h1> <a href="index.html">Sign Up</a></h1>
        </div>
        <div className="content-w3ls text-center">
          <img src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="" className="img-responsive" />
          <form onSubmit={submitHandler} action="#" method="post">
          <div className="wthree-field">
              <input name="name" id="text1" type="text" placeholder="DisplayName" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="wthree-field">
              <input name="text1" id="text1" type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="wthree-field">
              <input name="password" id="myInput" type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="wthree-field">
              <input name="rePass" id="myInput" type="Password" placeholder="RePassWord" onChange={(e) => setRePassword(e.target.value)}/>
            </div>
            <div className="wthree-field">
              <button type="submit" className="btn">Sign Up</button>
            </div>
            <div className="login-bottom">
              <Link to="/Signin" className>Signin??</Link>
            </div>
          </form>
        </div>
      </section>
        </div>
    )
}

export default SigupScreen
