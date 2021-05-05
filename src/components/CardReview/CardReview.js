import React from 'react'
import './CardReview.css'
import Rating from '../Raiting/Raiting';
import { Link} from 'react-router-dom';

function CardReview(props) {
    const {ListReview}=props
    console.log(ListReview);
    return (
        <div>
            <div class="row bottom-ab-grids animated wow slideInLeft ">
                {ListReview.length>0?ListReview.map((item)=>
                    <div class="col-lg-6 subject-card mt-4">
                    <div class="subject-card-header p-4">
                        <Link to={"/ReviewScrennDetail/?ReviewId="+item.id} class="card_title p-lg-4d-block">
                            <div class="row align-items-center">
                                <div class="col-sm-5 subject-img">
                                    <img src={item.image} class="img-fluid" alt="" />
                                </div>
                                <div class="col-sm-7 subject-content mt-sm-0 mt-4">
                                    <h4>{item.Name}</h4>
                                    <p>3Days, 4 Nights</p>
                                    <div class="dst-btm">
                                        <h6 class=""> {item.brand} </h6>
                                        <span>{item.city}</span>
                                    </div>
                                    <Rating rating={item.raiting} ></Rating>
                                    
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                ):<div></div>}               
            </div>
        </div>
        
               
    )
}

export default CardReview
