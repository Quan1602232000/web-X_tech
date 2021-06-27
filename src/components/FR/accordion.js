import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { foodreviewbyCB } from '../../actions/FoodAcions'
import { ReviewDLTC } from '../../actions/ReviewActions'


function Accordion(props) {
    const { city,updateforum } = props
    const FoodReviewByCB = useSelector((state) => state.FoodReviewByCB);
    const { Food_By_CB } = FoodReviewByCB;
    const listreviewDLTC = useSelector((state) => state.listreviewDLTC);
    const { DLTC } = listreviewDLTC;


    const dispatch = useDispatch();
    const onForumbyname=(Name)=>{
        // const promise = new Promise(function (resolve, reject) {
        //     resolve(dispatch(getforumbyName(Name)));           
            
        // })
        // promise.then(
        //     function () {
        //         updateforum(Forum_By_Name)
        //     });
    }

    const OnFoodBrand = (brand) => {
        dispatch(foodreviewbyCB(city, brand))
    }

    const OnPlaceBrand = (brand) => {
        dispatch(ReviewDLTC(city, brand))
    }

    return (
        <div id="accordion">
            <div class="card card_left card_left_css mb-2">
                <div class="card-header card_header_css" id="headingOne">
                    <h5 class="mb-0">
                        <i class="fas fa-utensils"></i>
                        <button onClick={() => OnFoodBrand("Nhà Hàng")} class="btn btn-link btn_left" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            NHÀ HÀNG
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse collapse__css" aria-labelledby="headingOne"
                    data-parent="#accordion">
                    <div class="card-body ">
                        <ul class="accordion_list ml-5">
                            {Food_By_CB.length > 0 ? Food_By_CB.map(food =>

                                <li class="accordion_item mb-3"><i class="fas fa-arrow-alt-circle-right mr-2"></i><a onClick={()=>updateforum(food.name)} href="#">{food.name}</a></li>
                            )
                                : null}
                        </ul>

                    </div>
                </div>
            </div>

            <div class="card card_left card_left_css mb-3">
                <div class="card-header card_header_css" id="headingTwo">
                    <h5 class="mb-0">
                        <i class="fas fa-hamburger"></i>
                        <button onClick={() => OnFoodBrand("Ăn Vặt")} class="btn btn-link collapsed btn_left" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ĂN VẶT
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse collapse__css" aria-labelledby="headingTwo"
                    data-parent="#accordion">
                    <div class="card-body ">
                        <ul class="accordion_list ml-5">
                            {Food_By_CB.length > 0 ? Food_By_CB.map(food =>

                                <li class="accordion_item mb-3"><i class="fas fa-arrow-alt-circle-right mr-2"></i><a onClick={()=>updateforum(food.name)} href="#">{food.name}</a></li>
                            )
                                : null}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card_left card_left_css mb-3">
                <div class="card-header card_header_css" id="headingThree">
                    <h5 class="mb-0">
                        <i class="fas fa-landmark"></i>
                        <button onClick={() => OnPlaceBrand("Di Tích Lịch Sử")} class="btn btn-link collapsed  btn_left" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            DI TÍCH LỊCH SỬ
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse collapse__css" aria-labelledby="headingThree"
                    data-parent="#accordion">
                    <div class="card-body">
                        <ul class="accordion_list ml-5">
                            {DLTC.length > 0 ? DLTC.map(item =>

                                <li class="accordion_item mb-3"><i class="fas fa-arrow-alt-circle-right mr-2"></i><a onClick={()=>updateforum(item.Name)} href="#">{item.Name}</a></li>
                            )
                                : null}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card_left card_left_css mb-3">
                <div class="card-header card_header_css" id="headingThree">
                    <h5 class="mb-0">
                        <i class="fas fa-mountain"></i>
                        <button onClick={() => OnPlaceBrand("Danh Lam Thắng Cảnh")} class="btn btn-link collapsed  btn_left" data-toggle="collapse"
                            data-target="#collapseFour" aria-expanded="false"
                            aria-controls="collapseFour">
                            DANH LAM THẮNG CẢNH
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse collapse__css" aria-labelledby="headingThree"
                    data-parent="#accordion">
                    <div class="card-body">
                        <ul class="accordion_list ml-5">
                            {DLTC.length > 0 ? DLTC.map(item =>

                                <li class="accordion_item mb-3"><i class="fas fa-arrow-alt-circle-right mr-2"></i><a onClick={()=>updateforum(item.Name)} href="#">{item.Name}</a></li>
                            )
                                : null}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
