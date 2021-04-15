import React from 'react'
import './SigupScreen.css'
import { Link} from 'react-router-dom'

function SigupScreen() {
    return (
        <div>
            <section className="main-signin">
        <div className="logo text-center">
          <h1> <a href="index.html">Sign Up</a></h1>
        </div>
        <div className="content-w3ls text-center">
          <img src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="" className="img-responsive" />
          <form action="#" method="post">
          <div className="wthree-field">
              <input name="name" id="text1" type="text" placeholder="DisplayName" required />
            </div>
            <div className="wthree-field">
              <input name="text1" id="text1" type="text" placeholder="Username" required />
            </div>
            <div className="wthree-field">
              <input name="password" id="myInput" type="Password" placeholder="Password" />
            </div>
            <div className="wthree-field">
              <input name="rePass" id="myInput" type="text" placeholder="RePassWord" />
            </div>
            <div className="wthree-field">
              <button type="submit" className="btn">Sign In</button>
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
