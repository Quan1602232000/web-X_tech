
import './App.css';
import './css/nav.css';
import Owl from  './js/owl';
import $ from 'jquery'
import { useEffect } from 'react';
function App() {
  // $(function(){
  //   $('.owl-carousel').owlCarousel({
  //     items:1,
  //     margin:10,
  //     autoHeight:true
  // });
  // })

  return (
    <div>
      <div className="App">
      <div className="header">
        {/* container */}
        <div className="container">
          {/* header-top */}
          <div className="header-top">
            <div className="header-logo">
              <a href="index.html"><img src="images/logo.png" alt="" /></a>
            </div>
            <div className="header-right">
              <ul>
                <li className="phone">+371 282 20 760</li>
                <li className="mail"><a href="mailto:example@mail.com">eony321v@gmail.com</a></li>
                <li className="checkout">
                  <a href="add-to-cart.html">
                    <span className="cart">$ 99.54</span>
                    <span className="check">Checkout</span>
                  </a>
                  <div className="shopping">
                    <h5>Your Shopping Cart is empty.</h5>
                    <p>Give it purpose—fill it with books, movies, mobiles, cameras, toys and fashion jewellery.</p>
                  </div>
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
              <input type="text" defaultValue="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}" required />
            </form>
          </div>
          <div className="clearfix"> </div>
          {/* script-for-menu */}
        </div>
        {/* //container */}
      </div>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="bottom-grid">
              <img src="https://vn.blog.kkday.com/wp-content/uploads/blogcover-1.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">FOOTBALL SHOES</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing,
                  vivamus congue nulla leo, quis imperdiet magna.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bottom-grid">
              <img src="https://vn.blog.kkday.com/wp-content/uploads/blogcover-1.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">FOOTBALL SHOES</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing,
                  vivamus congue nulla leo, quis imperdiet magna.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bottom-grid">
              <img src="https://vn.blog.kkday.com/wp-content/uploads/blogcover-1.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">FOOTBALL SHOES</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing,
                  vivamus congue nulla leo, quis imperdiet magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>    
  );

}


export default App;
