import React, { useEffect, useState } from 'react'
import './FoodReviewScreen.css'
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../../components/Raiting/Raiting';
import { foodreviewdetail, foodlistreview, foodreviewmenu } from '../../actions/FoodAcions';
import OwlCarousel from 'react-owl-carousel2';
import Comment_food from '../../components/Comment_food/Comment_food';
import { getcommentfood, createCommentfood } from '../../actions/Comment-foodActions';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

function FoodReviewScreen(props) {
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
    const foodId = props.match.params.id
    const brand = props.location.search ? props.location.search.split("?brand=")[1] : '';
    const city = props.location.search ? props.location.search.split("?", 2)[1] : '';
    const CiTy = city.split("city=")[1]
    const page = 0;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const FoodDetail = useSelector((state) => state.FoodDetail)
    const { Food_detail, loading, error } = FoodDetail
    const listfood = useSelector((state) => state.listfood)
    const { Food_list } = listfood
    const dispatch = useDispatch();
    const CommentsFood = useSelector((state) => state.CommentsFood)
    const { comments_Food } = CommentsFood
    const ListMenuFood = useSelector((state) => state.ListMenuFood)
    const { Food_Menu } = ListMenuFood
    console.log(Food_Menu);
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const username = userInfo.length > 0 ? userInfo[0].displayName : null
    const avartar = userInfo.length > 0 ? userInfo[0].image : null
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const like = 0;
    const options = {
        items: 1,
        autoplay: true,
    };
    useEffect(() => {
        dispatch(foodreviewmenu(foodId))
        return () => {

        }
    }, [])
    useEffect(() => {
        dispatch(getcommentfood(foodId))
        return () => {

        }
    }, [])
    useEffect(() => {
        dispatch(foodreviewdetail(foodId))
        return () => {

        }
    }, [])
    useEffect(() => {
        dispatch(foodlistreview(CiTy, brand, page))
        return () => {

        }
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        setIsListening(false)
        const promise = new Promise(function (resolve, reject) {
            if (userInfo.length > 0) {
                resolve(dispatch(createCommentfood(foodId, username, comment, date, time, rating, like,avartar)));
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
                dispatch(getcommentfood(foodId));
            });
        promise.then(
            function () {
                setcomment("")
            }
        )
    }

    return (
        <div>

            <div class="about" id="about">
                <div class="container">
                    <div class="about-agileits-title animated wow slideInRight">
                        <h3>REVIEW<span> FOOD</span></h3>
                    </div>
                    <div class="row w3ls-about-grids mt-5 animated wow slideInLeft">
                        <div class="col-md-6 w3l-about-img">
                            <OwlCarousel
                                options={options}
                            >
                                <div className="item">
                                    <img src={Food_detail.image_1} alt="image" />
                                </div>
                                <div className="item">
                                    <img src={Food_detail.image_2} alt="image" />
                                </div>
                                <div className="item">
                                    <img src={Food_detail.image_3} alt="image" />
                                </div>
                            </OwlCarousel>

                        </div>
                        <div class="col-md-6 w3l-about-left">
                            <h2>{Food_detail.name}</h2>
                            <Rating rating={Food_detail.rating} ></Rating>
                            <h5><i class="fas fa-dollar-sign mr-3"></i>{Food_detail.price}</h5>
                            <div class="review_ìnormation">
                                <p class="mt-3"><i class="fas fa-map-marker-alt mr-3"></i>{Food_detail.address}</p>
                                <h5><i class="fas fa-phone mr-3"></i>{Food_detail.Phone}</h5>
                                <h5><i class="fas fa-door-open mr-3"></i>{Food_detail.time}</h5>
                            </div>
                            <div class="Sumary">
                                <p>{Food_detail.Sumary}</p>
                            </div>
                        </div>
                        <div class="clearfix">
                        </div>
                    </div>

                    <div class="row mt-5 ">

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="Ranking">
                                <h3>Xếp Hạng Và Đánh Giá</h3>
                                <Rating rating={Food_detail.rating} ></Rating>
                            </div>
                            <div class="Ranking_2 mt-4">
                                <ul class="Ranking_2_list">
                                    <li class="Ranking_2_item">
                                        <p>Vị Trí :</p>
                                    </li>
                                    <li class="Ranking_2_item">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${Food_detail.Ranking_position * 4 * 10}px` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="Ranking_2_list">
                                    <li class="Ranking_2_item">
                                        <p>Giá Cả :</p>
                                    </li>
                                    <li class="Ranking_2_item">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${Food_detail.Ranking_price * 4 * 10}px` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="Ranking_2_list">
                                    <li class="Ranking_2_item">
                                        <p>Chất Lượng :</p>
                                    </li>
                                    <li class="Ranking_2_item">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${Food_detail.Ranking_quanlity * 4 * 10}px` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="Ranking_2_list">
                                    <li class="Ranking_2_item">
                                        <p>Phục Vụ :</p>
                                    </li>
                                    <li class="Ranking_2_item">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${Food_detail.Ranking_serve * 4 * 10}px` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="Ranking_2_list">
                                    <li class="Ranking_2_item">
                                        <p>Không Gian :</p>
                                    </li>
                                    <li class="Ranking_2_item">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${Food_detail.Ranking_space * 4 * 10}px` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="Menu">
                                <h3>Menu</h3>
                            </div>
                            <OwlCarousel
                                options={options}
                            >
                                {Food_Menu.length > 0 ? Food_Menu.map((Menu) =>
                                    <div class="item">
                                        <figure class="figure">
                                            <img src={Menu.image} class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                                            <figcaption class="figure-caption">{Menu.name}</figcaption>
                                        </figure>
                                    </div>
                                ):(<div></div>)}

                            </OwlCarousel>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {comments_Food.length > 0 ? comments_Food.map((comment) => (
                                <Comment_food key={comment.id} comment={comment} usersigninId={usersigninId} foodId={foodId}></Comment_food>
                            )) : (<div><p>Not Comment</p></div>)}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                </div>
            </div>
            <div id="gallery" class="gallery">
                <div class="container">
                    <div class="agileits-title">
                        <div class="agileits-title-left">
                            <h3>Our <span>Gallery</span></h3>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="row agileinfo-gallery-row">
                        {Food_list.length > 0 ? Food_list.map((food) => (
                            <div class="col-md-3 col-sm-3 col-xs-6 w3gallery-grids">
                                <a href={food.image_2} class="imghvr-hinge-right figure">
                                    <img src={food.image_2} alt="" title="Pizeria hots" />
                                    <div class="agile-figcaption">
                                        <h4>Specials</h4>
                                        <i class="fa fa-cutlery" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </div>
                        )) : (<div></div>)}

                        <div class="clearfix"> </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FoodReviewScreen
