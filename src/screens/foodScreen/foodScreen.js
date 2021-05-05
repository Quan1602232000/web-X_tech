import React, { useEffect, useState } from 'react'
import CardFood from '../../components/CardFood/CardFood';
import { useSelector, useDispatch } from 'react-redux';
import './foodScreen.css';
import { foodlistreview } from '../../actions/FoodAcions';
import Rating from '../../components/Raiting/Raiting';
import { FilterFood } from '../../actions/FilterActions';
import SelectPure from "select-pure";

function FoodScreen(props) {
    const brand = props.location.search ? props.location.search.split("?brand=")[1] : '';
    const city = props.location.search ? props.location.search.split("?", 2)[1] : '';
    const CITY = city.split("city=")[1]
    const [page, setpage] = useState(1)
    const listfood = useSelector((state) => state.listfood)
    const { Food_list } = listfood
    const [rating, setRating] = useState('ALL')
    const [price, setPrice] = useState('ALL')
    const FoodFilter =useSelector((state)=>state.FoodFilter)
    const {foods_filter}=FoodFilter
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FilterFood(CITY, brand,rating,price,page))
        return () => {

        }
    }, [CITY, brand,rating,price,page])
    useEffect(() => {
        dispatch(foodlistreview(CITY, brand, page))
        return () => {

        }
    }, [CITY, brand, page])
    const Onprevious = () => {
        page - 1 >= 1 ? setpage(page - 1) : setpage(page)
    }
    const Onnext = () => {
        setpage(page + 1)
    }
    console.log(rating)
    return (
        <div>
            <section class="w3l-grids-3 py-5">
                <div class="container py-md-5">
                    <div class="row">
                        <div class="title-content text-left mb-lg-5 mb-4">
                            <h6 class="sub-title">Visit</h6>
                            <h3 class="hny-title" >{Food_list.length > 0 ? Food_list[0].brand : ''}</h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            
                            <div class="row">
                                
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Đánh Giá</label>
                                        </div>
                                        <select value={rating} onChange={(e) => setRating(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">Tất Cả</option>
                                            <option value="1">1 sao</option>
                                            <option value="2">2 sao</option>
                                            <option value="3">3 sao</option>
                                            <option value="4">4 sao</option>
                                            <option value="5">5 sao</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                {Food_list.length>0&&Food_list[0].brand=="Nhà Hàng"?(
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Giá Tiền</label>
                                        </div>
                                        <select value={price} onChange={(e) => setPrice(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">Tất Cả</option>
                                            <option value="2">Trên 200.000VNĐ</option>
                                            <option value="1">Dưới 200.000VNĐ</option>
                                        </select>
                                    </div>
                                ):(
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Giá Tiền</label>
                                        </div>
                                        <select value={price} onChange={(e) => setPrice(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">Tất Cả</option>
                                            <option value="2">Trên 50.000VNĐ</option>
                                            <option value="1">Dưới 50.000VNĐ</option>
                                        </select>
                                    </div>
                                )}                               
                                </div>                               
                            </div>
                            
                            {/* <ul class="dropdown-list">
                                <li class="dropdown-ITEM">
                                    <div class="dropdown">
                                        <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Đánh Giá
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={(e) => setRating(e.target.value)}>
                                            <option class="dropdown-item" value='ALL' >Tất Cả</option>
                                            <option class="dropdown-item" value='1'>{<Rating rating={1} ></Rating>}</option>
                                            <option class="dropdown-item" value='2'>{<Rating rating={2} ></Rating>}</option>
                                            <option class="dropdown-item" value='3'>{<Rating rating={3} ></Rating>}</option>
                                            <option class="dropdown-item" value='4'>{<Rating rating={4} ></Rating>}</option>
                                            <option class="dropdown-item" value='5'>{<Rating rating={5} ></Rating>}</option>
                                        </div>
                                    </div>
                                    
                                </li>
                                {foods_filter.length > 0 ?(
                                    
                                    {foods_filter[0].brand == 'Nhà Hàng' ? (
                                        <div class="input-group mb-3 ml-5">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Giá Tiền</label>
                                        </div>
                                        <select value={price} onChange={(e) => setPrice(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">Tất Cả</option>
                                            <option value="2">Trên 200.000VNĐ</option>
                                            <option value="1">Dưới 200.000VNĐ</option>
                                        </select>
                                    </div>
                                    ) : (
                                        <div class="input-group mb-3 ml-5">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Giá Tiền</label>
                                        </div>
                                        <select value={price} onChange={(e) => setPrice(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="ALL">Tất Cả</option>
                                            <option value="2">Trên 50.000VNĐ</option>
                                            <option value="1">Dưới 50.000VNĐ</option>
                                        </select>
                                    </div>
                                    )}

                                
                                ):(<div></div>)}
                            </ul> */}
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            

                        </div>
                    </div>
                    {foods_filter.length==0?(
                        <div class="not-found">                           
                            <img src="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png" class="img-responsive text-center" alt="Image"/>                           
                        </div>
                    ):(
                        <div class="row animated wow slideInLeft">
                        <CardFood foods={foods_filter} city={CITY} brand={brand}></CardFood>
                    </div>    
                    )}                   
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center ">
                        <li class="page-item">
                            <a onClick={Onprevious} class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a onClick={Onnext} class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default FoodScreen
