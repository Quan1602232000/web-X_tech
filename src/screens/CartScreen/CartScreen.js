import React, { useEffect, useState } from 'react'
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';

function CartScreen(props) {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const Qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const productId = props.match.params.id;
    const removeFromCartHandler = (id) => { 
        dispatch(removeFromCart(id));
      }
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, Qty));
        }
    }, []);
    return (
        <div className="checkout mt-5 ">
            <div className="container ">
                <h3 className="animated wow slideInLeft" data-wow-delay=".5s">Your shopping cart contains: <span>{cartItems.length  } Products</span></h3>
                <div className="checkout-right animated wow slideInUp" data-wow-delay=".5s">
                    <table className="timetable_sub">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Xe Thuê</th>
                                <th>Số ngày</th>
                                <th>Tên Xe</th>
                                <th>Loại Xe</th>
                                <th>Giá</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length === 0 ?
                                <div>

                                </div>
                                : (cartItems.map(item =>
                                    <tr key={item.id} className="rem1">
                                        <td className="invert">1</td>
                                        <td className="invert-image"><Link to={'/MotoDetail/'+item.id+'?userId='+item.userId}><img src={item.image} alt=" " className="img-responsive" /></Link></td>
                                        <td className="invert">
                                            <div className="quantity">
                                                <div className="quantity-select">
                                                    {/* <div onClick={downpagenumber} className="entry value-minus">&nbsp;</div>
                    <div value={item.qty} onChange={(e) => dispatch(addToCart(item.product,e.target.value))} className="entry value"><span>{Qty}</span></div>
                    <div onClick={Uppagenumber} className="entry value-plus active">&nbsp;</div> */}
                                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.id, e.target.value))} class="custom-select">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="invert">{item.name}</td>
                                        <td className="invert">{item.brand}</td>
                                        <td className="invert">{item.price*item.qty * 1000}VNĐ</td>
                                        <td className="invert">
                                            <div className="rem">
                                                <div onClick={() => removeFromCartHandler(item.id)} className="close1">
                                                    <img src="https://www.pngitem.com/pimgs/m/463-4637625_x-button-close-x-button-png-transparent-png.png" alt=" " />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>))}



                            {/*quantity*/}
                            {/*quantity*/}
                        </tbody></table>
                </div>
                <div className="checkout-left">
                    <div className="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
                        <Link to="/RentMoto"><h4>Continue to basket</h4></Link>
                        <ul>
                            {
                                cartItems.length === 0 ?
                                    <div>

                                    </div>
                                    : cartItems.map(item =>
                                        <li key={item.id}>{item.name} <i>-</i> <span>{item.qty * item.price*1000}VNĐ </span></li>)}
                            <li>Total <i>-</i> <span>{cartItems.reduce((a, c) => a + c.price * c.qty*1000, 0)}VNĐ</span></li>
                        </ul>
                    </div>
                    <div className="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
                        <button disabled={cartItems.length === 0} href=""><span className="glyphicon glyphicon-menu-left" aria-hidden="true" />Checkout</button>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
