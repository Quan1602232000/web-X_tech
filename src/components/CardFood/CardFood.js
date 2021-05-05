import React from 'react'
import './CardFood.css'
import Rating from '../Raiting/Raiting';
import { Link} from 'react-router-dom';

function CardFood(props) {
    const {foods,city,brand}=props
    return (
        <div class="row bottom-ab-grids animated wow slideInLeft">
                {foods.length>0?foods.map((item)=>
                    <div class="col-lg-6 subject-card mt-4">
                    <div class="subject-card-header p-4">
                        <Link to={"/FoodReviewScreen/"+item.id+"?city=" + city + '?brand='+brand} class="card_title p-lg-4d-block">
                            <div class="row align-items-center">
                                <div class="col-sm-5 subject-img">
                                    <img src={item.image_1} class="img-fluid" alt="" />
                                </div>
                                <div class="col-sm-7 subject-content mt-sm-0 mt-4">
                                    <h4>{item.name}</h4>
                                    <p>{item.price}</p>
                                    <div class="dst-btm">
                                        <h6 class=""> {item.brand} </h6>
                                        <span>{item.city}</span>
                                    </div>
                                    <Rating rating={item.rating} ></Rating>                                   
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                ):<div></div>}               
            </div>
    )
}

export default CardFood
