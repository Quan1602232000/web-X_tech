import './App.css';
import './css/nav.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SigninScreen from './screens/SigninScreen/SigninScreen';
import SignupScreen from './screens/SigupScreen/SigupScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout()); 
  };
  // $(function(){
  //   $('.owl-carousel').owlCarousel({
  //     items:1,
  //     margin:10,
  //     autoHeight:true
  // });
  // })

  return (
    
    <BrowserRouter>
      <div className="App">
      <div className="header">
        {/* container */}
        <div className="container">
          {/* header-top */}
          <div className="header-top">
            <div className="header-logo">
              <Link to="/"><p>X-TECH</p></Link> 
            </div>
            <div className="header-right">
              <ul>
                <li className="phone">+371 282 20 760</li>
                <li className="mail"><a href="mailto:example@mail.com">eony321v@gmail.com</a></li>
                <li className="checkout">
                  {userInfo.length>0? 
                  (<div>
                    <a href="add-to-cart.html">
                    <span className="cart">{userInfo[0].displayName}</span>
                    {/* <span className="check">Checkout</span> */}
                  </a>
                  <div className="shopping">
                    <Link to="#signout" onClick={signoutHandler}>SignOut</Link>
                    {/* <h5>Your Shopping Cart is empty.</h5>
                    <p>Give it purpose—fill it with books, movies, mobiles, cameras, toys and fashion jewellery.</p> */}
                  </div>
                  </div>):
                  (
                    <div class="forms ml-auto">
                    <Link to="/Signin" class="btn"><span class="fas fa-sign-in-alt"></span> Sign In</Link>
                    <Link to="/Signup" class="btn"><span class="fas fa-user-plus"></span> Sign Up</Link>
                  </div>
                  )
                  }                
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* //header-top */}
          <div className="top-nav">
            <span className="menu"><img src="images/menu.png" alt="" /></span>
            <ul className="nav">
              <li className="dropdown1"><a href="index.html">HOME</a>
                <ul className="dropdown2">
                  <li><a href="single.html">lorem</a></li>
                  <li><a href="single.html">dorem sia</a></li>
                  <li><a href="single.html">erik</a></li>
                  <li><a href="single.html">ipsum padamans</a></li>
                  <li><a href="single.html">behance</a></li>
                </ul>
              </li>
              <li className="dropdown1"><a href="men.html">MEN</a>
                <ul className="dropdown2">
                  <li><a href="men.html">Clothing</a></li>
                  <li><a href="men.html">Footwear</a></li>
                  <li><a href="men.html">Watches</a></li>
                  <li><a href="men.html">Accessories</a></li>
                </ul>
              </li>     
              <li className="dropdown1"><a href="women.html">WOMEN</a>
                <ul className="dropdown2">
                  <li><a href="women.html">Ethnic Wear</a></li>
                  <li><a href="women.html">Western Wear</a></li>
                  <li><a href="women.html">All Jewellery</a></li>
                  <li><a href="women.html">Beauty &amp; Wellness</a></li>
                </ul>
              </li>              
              <li className="dropdown1"><a href="women.html">KIDS</a>
                <ul className="dropdown2">
                  <li><a href="women.html">Clothing</a></li>
                  <li><a href="women.html">Footwear</a></li>
                  <li><a href="women.html">Accessories</a></li>
                </ul>
              </li>  
              <li className="dropdown1"><a href="men.html">SALE</a>
                <ul className="dropdown2">
                  <li><a href="men.html">Clothing</a></li>
                  <li><a href="men.html">Footwear</a></li>
                  <li><a href="men.html">Watches</a></li>
                  <li><a href="men.html">Accessories</a></li>
                </ul>
              </li>  					           
              <li><a href="about.html">ABOUT US</a></li>            
              <li><a href="404.html">SUPPORT</a></li>
            </ul>
          </div>
          <div className="search">
            <form>
              <input type="text" placeholder="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}" required />
            </form>
          </div>
          <div className="clearfix"> </div>
          {/* script-for-menu */}
        </div>
        {/* //container */}
      </div>
    </div>
    <main className="main">
      <div className="content">
      <Route path="/" exact={true} component={HomeScreen}></Route>
      <Route path="/Signin" component={SigninScreen}></Route>
      <Route path="/Signup" component={SignupScreen}></Route>
      </div>
    </main>
    <footer className="py-5">
        <div className="container py-md-3">
          <div className="row footer-grids pb-md-5 pb-3">	
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#"> <i className="fa fa-phone" />Call Us</a>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#"> <i className="fa fa-envelope" />Send Message</a>
            </div>
            <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-2">
              <a href="#"> <i className="fa fa-skype" />Skype Call</a>
            </div>
            <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-2">
              <a href="#"> <i className="fa fa-comment" />Online Chat</a>
            </div>
          </div>
          <div className="subscribe-grid text-center">
            <p className="para three mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat ante. Praesent nulla nunc, pretium dapibus efficitur in, auctor eget elit. Lorem ipsum dolor sit amet </p>
            <h5>Subscribe for our latest updates</h5>
            <p>Get
              <span>10%</span> off on booking</p>
            <form action="#" method="post">
              <input className="form-control" type="email" placeholder="Subscribe" name="Subscribe" required />
              <button className="btn1">
                <i className="fa fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </footer>
    </BrowserRouter>    
  );

}


export default App;
