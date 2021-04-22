import './App.css';

import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SigninScreen from './screens/SigninScreen/SigninScreen';
import SignupScreen from './screens/SigupScreen/SigupScreen';
import Weather from './screens/Weather/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import RentMotoScreen from './screens/RentMotoScreen/RentMotoScreen';
import MotoScreendetail from './screens/MotoScreendetail/MotoScreendetail';
import CartScreen from './screens/CartScreen/CartScreen';

function App() {
  // Configure Firebase.
  // const config = {
  //   apiKey: 'AIzaSyAOyi6lfv3wIbrY6l1zfx5RBbAXy9ET-TQ',
  //   authDomain: 'x-tech-4a3b4.firebaseapp.com',
    
  // };
  // firebase.initializeApp(config);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state)=>state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout()); 
  };
  // console.log(userInfo);
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
  //     if(!user){
  //       return;
  //     }
  //     console.log('logged in user', user.displayName)
  //     const token =await user.getIdToken();
  //     console.log('Logged in user token: ',token)
  //   });
  //   return () => unregisterAuthObserver(); 
  // }, []);

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
                <li className="mail"><a href="mailto:example@mail.com">XTech@gmail.com</a></li>
                <li className="userinfo">
                  {userInfo.length>0? 
                  (<div>
                    <a href="add-to-cart.html">
                    <span className="profile">{userInfo[0].displayName}</span>
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
                <li>
                  <form action="#" method="post" class="btn-cart">
                    <Link to="/cart">
                      <span class="fas fa-shopping-cart"></span>
                      <button class="top_transmitv_cart" type="submit" name="submit" value="">
                        My Cart
                      </button>
                    </Link>
                    {cartItems.length>0&&<span className="badge">{cartItems.length}</span>}  
                  </form>
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
              <li className="dropdown1"><a href="men.html">THUÊ XE</a>
                <ul className="dropdown2">
                  <li><a href="men.html">Xe Số</a></li>
                  <li><a href="men.html">Xe Tay Ga</a></li>
                  <li><a href="men.html">Xe Côn</a></li>
                </ul>
              </li>     
              <li className="dropdown1"><a href="women.html">ĐỊA ĐIỂM ĂN UỐNG</a>
                <ul className="dropdown2">
                  <li><a href="women.html">NHÀ HÀNG</a></li>
                  <li><a href="women.html">ĐỒ ĂN VẶT</a></li>
                  {/* <li><a href="women.html">All Jewellery</a></li> */}
                  {/* <li><a href="women.html">Beauty &amp; Wellness</a></li> */}
                </ul>
              </li>              
              <li className="dropdown1"><a href="women.html">ĐỊA ĐIỂM THAM QUAN</a>
                <ul className="dropdown2">
                  <li><a href="women.html">DI TÍCH LỊCH SỬ</a></li>
                  <li><a href="women.html">CÔNG TRÌNH VĂN HÓA</a></li>
                  <li><a href="women.html">NƠI MUA SẮM</a></li>
                </ul>
              </li>  
              {/* <li className="dropdown1"><a href="men.html">SALE</a>
                <ul className="dropdown2">
                  <li><a href="men.html">Clothing</a></li>
                  <li><a href="men.html">Footwear</a></li>
                  <li><a href="men.html">Watches</a></li>
                  <li><a href="men.html">Accessories</a></li>
                </ul>
              </li>  					            */}
              <li><Link to="/Weather">THỜI TIẾT</Link></li>            
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
      <Route path="/Weather" component={Weather}></Route>
      <Route path="/RentMoto" component={RentMotoScreen}></Route>
      <Route path="/MotoDetail/:id" component={MotoScreendetail}></Route>
      <Route path="/Cart/:id?" component={CartScreen}></Route>
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
              <a href="#"> <i className="fab fa-skype" />Skype Call</a>
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
