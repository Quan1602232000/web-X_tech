import React, { useEffect, useState,useRef } from 'react'
import './DLTC_Screen.css';
import CardReview from '../../components/CardReview/CardReview';
import { useSelector, useDispatch } from 'react-redux';
import { ReviewListDetail } from '../../actions/ReviewActions'

function DLTC_Screen(props) {
    const brand = props.location.search ? props.location.search.split("?brand=")[1] : '';
    const Title= brand=='Danh Lam Thắng Cảnh'||brand=='DANH%20LAM%20TH%E1%BA%AFNG%20C%E1%BA%A3NH'? "Danh Lam Thắng Cảnh":"Di Tích Lịch Sử"
    const city = props.location.search ? props.location.search.split("?", 2)[1] : '';
    const CITY = city.split("city=")[1]
    const [page, setpage] = useState(1)
    const listReviewDetail = useSelector((state) => state.listReviewDetail);
    const { Review_list } = listReviewDetail
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ReviewListDetail(CITY, brand, page))
        return () => {

        }
    }, [CITY, brand, page])

    const Onprevious= () =>{
        page-1>=1?setpage(page-1):setpage(page)
    }
    const Onnext= () =>{
        setpage(page+1)
    }

    return (
        <div>
            <section class="w3l-grids-3 py-5">
                <div class="container py-md-5">
                    <div class="title-content text-left mb-lg-5 mb-4">
                        <h6 class="sub-title">Visit</h6>
                        <h3 class="hny-title">{Review_list.length>0?Review_list[0].brand:''}</h3>
                    </div>
                    <CardReview ListReview={Review_list}></CardReview>
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

export default DLTC_Screen
