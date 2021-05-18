import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../actions/cartActions';
import './CheckoutScreen.css';

function CheckoutScreen() {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => { 
        dispatch(removeFromCart(id));
      }
    return (
        <div class="container mt-5 mb-5">
            <div class="border">
                <div class="row justify-content-center mt-3">
                    <div class="col-md-12">
                        <h2 class="text-center">Thông tin CheckOut</h2>
                    </div>
                </div>
                <hr />

                <div class="row justify-content-center m-2">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Xe Thuê</th>
                                <th scope="col">Số Ngày</th>
                                <th scope="col">Tên Xe</th>
                                <th scope="col">Loại Xe</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Xóa</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length > 0 ? cartItems.map((item) => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <div class="image_Checkout">
                                            <Link to={'/MotoDetail/' + item.id + '?userId=' + item.userId}><img src={item.image} alt=" " className="img-responsive" /></Link>
                                        </div>
                                    </td>
                                    <td>{item.qty} </td>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.price * item.qty * 1000}VNĐ</td>
                                    <td>
                                        <div onClick={() => removeFromCartHandler(item.id)} className="closeCheckout">
                                            <img src="https://www.pngitem.com/pimgs/m/463-4637625_x-button-close-x-button-png-transparent-png.png" alt=" " />
                                        </div>
                                    </td>
                                </tr>
                            )) : (<div></div>)}


                        </tbody>
                    </table>
                </div>
                <hr />

                <div class="row justify-content-center m-2">
                    <div class="col-md-12">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2">Thông tin khác</h4>
                            </header>
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label>Ngày Thuê&nbsp;<span style={{ color: "red" }}>*</span></label>
                                            <input type="text" class="form-control"
                                                placeholder="Chọn Ngày Thuê" />
                                        </div>
                                        <div class="col form-group">
                                            <label>Khách sạn/Địa chỉ&nbsp;<span style={{ color: "red" }}>*</span></label>
                                            <input type="text" class="form-control"
                                                placeholder="Điền tên khách sạn và địa chỉ" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Hình thức giao nhận xe</label>
                                            <select id="inputState" class="form-control">
                                                <option>Vui lòng chọn</option>
                                                <option>Giao nhận tại khách sạn</option>
                                                <option>Giao nhận tại cửa hàng</option>
                                                <option>Giao nhận tại sân bay</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Vâng tôi trên 18 tuổi và đã có giấy phép lái xe<span
                                            style={{ color: "red" }}>*</span></label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                            <input type="text" class="form-control"
                                                placeholder="Vui lòng xác nhận" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Thông tin liên hệ (Gmail,Facebook,SDT)&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <input type="email" class="form-control" placeholder="Vd: nguyenhongquan2310@gmail.com" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div class="row justify-content-center m-2">
                    <div class="col-md-12">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2">Thông tin liên lạc</h4>
                                <span>Chúng tôi sẽ thông báo mọi thay đổi về đơn hàng cho bạn</span>
                            </header>
                            <article class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="col form-group">
                                            <label>Quốc gia/khu vực&nbsp;<span style={{ color: "red" }}>*</span></label>
                                            <select id="inputState" class="form-control">
                                                <option>Việt Nam</option>
                                                <option>Thái Lan</option>
                                                <option>Lào</option>
                                                <option>Campuchia</option>
                                            </select>
                                        </div>
                                        <div class="col form-group">
                                            <label>Số điện thoại&nbsp;<span style={{ color: "red" }}>*</span></label>
                                            <input type="text" class="form-control" placeholder="Vd: (+84)" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Email (để xác nhận đơn hàng)&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <input type="email" class="form-control" placeholder="Vd: abc@gmail.com" />
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
                <hr />

                <div class="row justify-content-center m-2">
                    <div class="col-md-12">
                        <div class="card">
                            <header class="card-header">
                                <h4 class="card-title mt-2">Loại ưu đãi</h4>
                            </header>
                            <article class="card-body">
                                <div class="btn btn-outline-success">
                                    <i class="fas fa-tags mr-1"></i><span>Sử dụng mã ưu đãi</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CheckoutScreen
