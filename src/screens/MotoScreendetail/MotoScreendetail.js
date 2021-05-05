import React, { useEffect, useState } from 'react'
import './MotoScreendetail.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productdetail } from '../../actions/RentmotoActions';
import { getuserprofile } from '../../actions/userActions';
import Comment from '../../components/Comment/Comment';
import { createComment, getcomment,getUserLike } from '../../actions/CommentActions';
import Rating from '../../components/Raiting/Raiting';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

function MotoScreendetail(props) {
    const [rating,setRating]=useState(1);
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
    const productid = props.match.params.id
    const userid = props.location.search ? props.location.search.split("=")[1] : '';
    const userprofile = useSelector((state) => state.userprofile)
    const { userPF } = userprofile
    const detailproduct = useSelector((state) => state.detailproduct)
    const { product, loading, error } = detailproduct
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [comment, setcomment] = useState('')
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const username = userInfo.length > 0 ? userInfo[0].displayName : null
    const usersigninId=userInfo.length > 0 ? userInfo[0].id : null
    const commentget = useSelector((state) => state.commentget)
    const { comments } = commentget
    const qty = 1;
    const like=0;
    // const Getuserlike=useSelector((state)=>state.Getuserlike)
    // const {userlike}= Getuserlike
    const [commentId,setcommentId]=useState('')

    // const handlecommentId=(commentId)=>{
    //     setcommentId(commentId);
    // }
    // console.log(commentId)
    // useEffect(() => {
    //     dispatch(getUserLike(usersigninId))
    //     return () => {
            
    //     }
    // }, [])
    // const ChangeComment=(id)=>{

    // }
    
    useEffect(() => {
        dispatch(getcomment(productid))
        return () => {

        }
    }, [productid])
    const submitHandler = (e) => {
        e.preventDefault();
        setIsListening(false)
        const promise = new Promise(function (resolve, reject) {
            if (userInfo.length > 0) {
                resolve(dispatch(createComment(productid, username, comment, date, time, rating,like)));
            }
            else {
                reject(
                    alert('bạn cần phải đăng nhập trước'),
                    props.history.push('/Signin')
                )
            }
        })
        promise.then(
            // function(){
            //     setcomment("")
            // },
            function () {
                dispatch(getcomment(productid));
            });
        promise.then(
            function () {
                setcomment("")
            }
        )
    }
    useEffect(() => {
        dispatch(getuserprofile(userid))
        return () => {

        }
    }, [])
    // const profile = userPF[0];
    console.log(userPF)
    useEffect(() => {
        dispatch(productdetail(productid));
        return () => {
            //
        };
    }, []);
    const handleAddToCart = () => {
        props.history.push('/Cart/' + productid + '?qty=' + qty);
        console.log(props)
    };

    return (
        <div className="banner-bootom-w3-agileits">
            <div className="container">
                {/* tittle heading */}
                <h3 className="tittle-w3l-detail">Single Page
                <span className="heading-style-detail">
                        <i />
                        <i />
                        <i />
                    </span>
                </h3>
                {/* //tittle heading */}

                {/* {loading ? <div>Loading...</div> :
                    error ? <div>{error}</div> :
                        ( */}
                <div class="row mt-5 mb-5 animated wow slideInLeft">
                    <div className="col-md-6 single-right-left ">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li data-thumb={product.image}>
                                        <div className="thumb-image">
                                            <img src={product.image} data-imagezoom="true" className="img-responsive" alt="" />
                                        </div>
                                    </li>
                                    {/* <li data-thumb="images/si2.jpg">
                                        <div className="thumb-image">
                                            <img src="https://cafefcdn.com/203337114487263232/2020/10/12/photo-2-16024669038131978802424.jpg" data-imagezoom="true" className="img-responsive" alt="" /> 
                                        </div>
                                    </li>
                                    <li data-thumb="images/si3.jpg">
                                        <div className="thumb-image">
                                            <img src="images/si3.jpg" data-imagezoom="true" className="img-responsive" alt="" /> 
                                        </div>
                                    </li> */}
                                </ul>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 single-right-left simpleCart_shelfItem">
                        <h3>{product.name}</h3>
                        <p>
                            <span className="item_price mr-3">{product.price * 1000}VNĐ</span>
                            <label>Free delivery</label>
                        </p>
                        <Rating rating={product.rating} ></Rating>           
                        <div className="single-infoagile">
                            <p>
                                <i className="fas fa-hand-point-right" aria-hidden="true" />Thông tin xe
                                        </p>
                            <ul>
                                <li>
                                    <span>loại xe:  </span> {product.brand}
                                </li>
                                <li>
                                    <span>Biển số xe:  </span>{product.bien_so}
                                </li>
                                <li>
                                    <span>Thời gian sử dụng:  </span> {product.TG_SD} năm
                                            </li>
                                <li>
                                    chi phí thuê / 1 ngày :
                                                    <span className="item_price"> {product.price * 1000}VNĐ </span>
                                </li>
                            </ul>
                        </div>

                        <div className="product-single-w3l">
                            <p>
                                <i className="fas fa-hand-point-right" aria-hidden="true" />Thông tin người cho thuê
                                        </p>
                            {userPF ? userPF.map((item) =>
                                <ul class="Information_Rent">
                                    <li>
                                        <span>Họ Tên:</span>{item.name ? item.name : null}
                                    </li>
                                    <li>
                                        <span>Số điện thoại:</span> {item.SDT ? item.SDT : null}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                        <div className="occasion-cart">
                            {/* <button type="button" class="btn btn-warning">Warning</button> */}
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                    <fieldset>
                                        <button onClick={handleAddToCart} type="button" class="button">ADD TO CART</button>
                                    </fieldset>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                <div class="mb-5">
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Xác nhận
                                </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Bạn sẽ nhận được email xác nhận và voucher ngay sau khi đặt. Trong trường hợp bạn không nhận được email từ chúng tôi, xin hãy kiểm tra thư mục Spam hoặc báo lại cho chúng tôi biết qua email
                                    </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Yêu cầu cho đơn hàng
                                 </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li ><i class="fas fa-angle-double-right"></i>Phí ngày được tính dựa trên 24 giờ. Ví dụ: nếu bạn nhận xe máy/xe tay ga vào 8:00 sáng ngày 01/05 và trả lại vào 8:00 sáng ngày 02/05, bạn sẽ được tính phí cho 1 ngày thuê</li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Yêu cầu độ tuổi tối thiểu: từ 18 tuổi trở lên
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Công dân Việt Nam phải xuất trình chứng minh thư và bằng lái xe hợp lệ khi nhận xe
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Để phù hợp với mục đích giấy tờ, người mang hộ chiếu không phải là người Việt Nam phải xuất trình hộ chiếu khi nhận xe máy
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Bạn không cần phải đặt cọc. Tuy nhiên, nhà điều hành sẽ giữ chứng minh thư hoặc hộ chiếu của bạn và sẽ hoàn trả khi xe máy bạn thuê hoạt động bình thường
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Trong trường hợp bạn làm hỏng hoặc mất xe máy, Klook, nhà điều hành và khách hàng sẽ thảo luận để đưa ra thỏa thuận tốt nhất
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Thông tin thêm
                                </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Vui lòng luôn tuân thủ luật và quy định giao thông. Nhà điều hành không chịu trách nhiệm cho bất kỳ thiệt hại hoặc vi phạm giao thông phát sinh khi bạn thuê
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Nghiêm cấm lái xe khi say rượu hoặc sử dụng chất kích thích
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {comments.length > 0 ? comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} usersigninId={usersigninId} productid={productid}></Comment>
                )) : (<div><p>Not Comment</p></div>)}

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

export default MotoScreendetail
