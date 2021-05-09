import React, { useEffect, useState } from 'react'
import './ReviewScrennDetail.css'
import { useSelector, useDispatch } from 'react-redux';
import { ReviewDetail_1, ReviewDetail_2 } from '../../actions/ReviewDetailActions'
import OwlCarousel from 'react-owl-carousel2';
import { getcommentreview, createCommentreview } from '../../actions/Comment-reviewAcions';
import Comment_review from '../../components/Comment_review/Comment_review';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

function ReviewScrennDetail(props) {
    const [rating, setRating] = useState(1);
    const [comment, setcomment] = useState('')
    const [isListening, setIsListening] = useState(false);
    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setcomment(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }
    const ReviewId = props.location.search ? props.location.search.split("=")[1] : '';
    const Review_D_1 = useSelector((state) => state.Review_D_1)
    const { Review_Detail_1 } = Review_D_1
    const Review_D_2 = useSelector((state) => state.Review_D_2)
    const { Review_Detail_2 } = Review_D_2
    const CommentReview = useSelector((state) => state.CommentReview)
    const { comments_Review } = CommentReview
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const username = userInfo.length > 0 ? userInfo[0].displayName : null
    const avartar = userInfo.length > 0 ? userInfo[0].image : null
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const like = 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcommentreview(ReviewId))
        return () => {

        }
    }, [])
    const options = {
        items: 2,
        autoplay: true,
    };
    useEffect(() => {
        dispatch(ReviewDetail_1(ReviewId))
        return () => {

        }
    }, [])
    useEffect(() => {
        dispatch(ReviewDetail_2(ReviewId))
        return () => {

        }
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        setIsListening(false)
        const promise = new Promise(function (resolve, reject) {
            if (userInfo.length > 0) {
                resolve(dispatch(createCommentreview(ReviewId, username, comment, date, time, rating, like,avartar)));
            }
            else {
                reject(
                    alert('bạn cần phải đăng nhập trước'),
                    props.history.push('/Signin')
                )
            }
        })
        promise.then(
            function () {
                dispatch(getcommentreview(ReviewId));
            });
        promise.then(
            function () {
                setcomment("")
            }
        )
    }
    const stylemain_top = {
        background: `url(${Review_Detail_1.length > 0 ? Review_Detail_1[0].image_TĐ : ""}) no-repeat bottom`,
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        MsBackgroundSize: "cover",
        // height:"1349px"
    }
    return (
        <div>
            <OwlCarousel
                options={options}>
                <div className="item image_TĐ">
                    <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_TĐ : ""} alt="image" />
                </div>
                <div className="item image_TĐ">
                    <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_1 : ""} alt="image" />
                </div>
                <div className="item image_TĐ">
                    <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_2 : ""} alt="image" />
                </div>
                <div className="item image_TĐ">
                    <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_3 : ""} alt="image" />
                </div>
            </OwlCarousel>

            <section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
                <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div class="row">
                        <div class="col-lg-4 about-imgs-txt">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                                    <div class="about-span-txt">
                                        <span class="fa fa-map-marker" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
                                    <h6 class="mb-lg-3 mb-2">Địa Chỉ</h6>
                                    <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Address : ""}</p>
                                </div>
                            </div>
                            <div class="row my-lg-5 my-md-4 my-3">
                                <div class="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
                                    <h6 class="mb-lg-3 mb-2">Thời Tiết</h6>
                                    <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Weather : ""}</p>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                                    <div class="about-span-txt">
                                        <span class="fa fa-sun-o" aria-hidden="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                                    <div class="about-span-txt">
                                        <span class="fa fa-calendar" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
                                    <h6 class="mb-lg-3 mb-2">Thời Gian</h6>
                                    <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Time_all : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 about-imgs-txt">
                            <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_1 : ""} alt="news image" class="img-fluid mb-5" />
                            <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_2 : ""} alt="news image" class="img-fluid mb-5" />
                            <img src={Review_Detail_1.length > 0 ? Review_Detail_1[0].image_3 : ""} alt="news image" class="img-fluid" />
                        </div>
                        <div class="col-lg-4 col-md-6 text-right about-two-grids">
                            <h3 class="title mb-md-4 mb-sm-3 mb-3">Giới Thiệu Về {Review_Detail_1.length > 0 ? Review_Detail_1[0].Name : ""}</h3>
                            <div class="about-para-txt">
                                <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].introduce : ""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
                <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div class="row">
                        <div class="col-lg-4 main-title-text">
                            <h3 class="title">Cẩm Nang Du Lịch {Review_Detail_1.length > 0 ? Review_Detail_1[0].Name : ""}</h3>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 service-grid-wthree text-center">
                                    <div class="ser-fashion-grid">
                                        <div class="about-icon mb-md-4 mb-3">
                                            <span class="fa fa-clock-o" aria-hidden="true"></span>
                                        </div>
                                        <div class="ser-sevice-grid">
                                            <h4 class="pb-3">Thời gian hoạt động</h4>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Time_1 : ""} </p>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Time_2 : ""}</p>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Time_3 : ""}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 service-grid-wthree text-center">
                                    <div class="ser-fashion-grid">
                                        <div class="about-icon mb-md-4 mb-3">
                                            <span class="fa fa-ticket" aria-hidden="true"></span>
                                        </div>
                                        <div class="ser-sevice-grid">
                                            <h4 class="pb-3">Giá vé</h4>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Fare_1 : ""}</p>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Fare_2 : ""}</p>
                                            <p>{Review_Detail_1.length > 0 ? Review_Detail_1[0].Fare_3 : ""}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-12 col-md-12 col-sm-12 service-grid-wthree text-center">
                                    <div class="ser-fashion-grid">
                                        <div class="about-icon mb-md-4 mb-3">
                                            <span class="fa fa-bus" aria-hidden="true"></span>
                                        </div>
                                        <div class="ser-sevice-grid">
                                            <h4 class="pb-3">Di chuyển đến {Review_Detail_1.length > 0 ? Review_Detail_1[0].Name : ""}</h4>
                                            <p>Đi xe ô tô: Bạn có thể chọn đi taxi, grab hoặc thuê xe có người lái, thậm chí là thuê xe tự lái</p>
                                            <p>Đi xe máy: Đây là phương tiện thuận tiện, tiết kiệm, phù hợp hơn cả với các bạn trẻ, hay các bạn nào bị say ô tô</p>
                                            <p>Đi tour ghép: Việc đi tour ghép có rất nhiều lợi ích: không lo tìm đường, cháy vé, nguy hiểm khi lưu thông, ăn uống, được hướng dẫn viên chăm lo, hướng dẫn, giới thiệu các địa danh trên Bà Nà cũng như các công trình và ý nghĩa của nó</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="content_tieude">
                <h1 class="mb-3 text-center tieude">Độc Đáo ở {Review_Detail_1.length > 0 ? Review_Detail_1[0].Name : ""}</h1>
            </div>
            <div class="w3-food-menu" id="ourmenu">
                <div class="container">
                    <div class="w3-menu-grids">
                        {Review_Detail_2.length > 0 ? Review_Detail_2.map((item) =>

                            <div class="row mb-3">
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div class="image_menu">
                                        <img src={item.image}></img>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div class="title_menu">
                                        <h3>{item.Title}</h3>
                                        <p>{item.Title_Detail}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (<div></div>)}


                    </div>
                </div>
            </div>
            <section class="booking py-lg-4 py-md-3 py-sm-3 py-3">
                <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div class="booking-here text-center">
                        <h5>Kinh Nghiệm Khi Du Lịch {Review_Detail_1.length > 0 ? Review_Detail_1[0].Name : ""}</h5>
                        <p class="mt-lg-4 mt-3">Cấm mang đồ ăn, nước uống</p>
                        <p>Thời gian đi thăm quan mất khoảng 6 tiếng</p>
                        <p>Xuất phát từ 7h sáng để kịp mua vé sẵn</p>
                        <p>Không nên đặt khách sạn trên Bà Nà vì giá khá cao, nên về trong ngày chuyến cáp treo cuối cùng là 21h</p>
                        <p>Nên tìm hiểu thời gian vận hành cáp treo để tránh thời gian đợi lên cáp. Chi phí cáp treo giữa ga 1 và ga 2 ở Bà Nà Hills miễn phí</p>
                    </div>
                </div>
            </section>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {comments_Review.length > 0 ? comments_Review.map((comment) => (
                            <Comment_review key={comment.id} comment={comment} usersigninId={usersigninId} ReviewId={ReviewId}></Comment_review>
                        )) : (<div><p>Not Comment</p></div>)}
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="leave-comment-form mt-5 mb-5" id="reply">
                    <div className="tille-">
                        <h4 class="side-title mb-2">Leave a Reply</h4>
                    </div>
                    <span className="input-group-text" id="basic-addon1">
                        {isListening ?
                            <span onClick={() => setIsListening(prevState => !prevState)}>🛑</span>
                            : <span onClick={() => setIsListening(prevState => !prevState)}>🎙️</span>}
                    </span>
                    <form onSubmit={submitHandler} action="#" method="post">

                        <div class="form-group" >
                            <textarea name="Comment"
                                class="form-control"
                                placeholder="Your Comment*"
                                required=""
                                spellcheck="false"
                                value={comment}
                                onChange={(e) => setcomment(e.target.value)}>
                            </textarea>
                        </div>
                        <select value={rating} onChange={(e) => setRating(e.target.value)} class="custom-select" id="inputGroupSelect01">
                            <option value="1">Rất Tệ</option>
                            <option value="2">Tệ</option>
                            <option value="3">Cũng Tốt</option>
                            <option value="4">Tốt</option>
                            <option value="5">Rất Tốt</option>
                        </select>
                        <div class="submit text-right">
                            <button class="btn btn-style btn-primary">Post Comment</button></div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ReviewScrennDetail
