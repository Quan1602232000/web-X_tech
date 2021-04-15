import React from 'react';
import './SigninScreen.css';
import { Link} from 'react-router-dom'

function SigninScreen() {
    return (
        <div>
            <section className="main-signin">
        <div className="logo text-center">
          <h1> <a href="index.html">Sign In</a></h1>
        </div>
        <div className="content-w3ls text-center">
          <img src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="" className="img-responsive" />
          <form action="#" method="post">
            <div className="wthree-field">
              <input name="text1" id="text1" type="text" placeholder="Username" required />
            </div>
            <div className="wthree-field">
              <input name="password" id="myInput" type="Password" placeholder="Password" />
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
