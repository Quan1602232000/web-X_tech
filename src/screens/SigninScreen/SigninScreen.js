import React,{useState,useEffect} from 'react';
import './SigninScreen.css';
import { Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userActions';

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const redirect = props.location.search ? props.location.search.split("=")[1] : '';
    const dispatch = useDispatch();
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
        dispatch(signin(email, password));
    }
    return (
        <div>
            <section className="main-signin">
        <div className="logo text-center">
          <h1> <a href="index.html">Sign In</a></h1>
        </div>
        <div className="content-w3ls text-center">
          <img src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="" className="img-responsive" />
          <form onSubmit={submitHandler} action="#" method="post">
            <div className="wthree-field">
              <input name="text1" id="text1" type="text" placeholder="Username" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="wthree-field">
              <input name="password" id="myInput" type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="wthree-field">
              <button type="submit" className="btn">Sign In</button>
            </div>
            <div className="login-bottom">
              <Link to="/Signup" className>Create An Account</Link>
            </div>
          </form>
        </div>
      </section>
        </div>
    )
}

export default SigninScreen
