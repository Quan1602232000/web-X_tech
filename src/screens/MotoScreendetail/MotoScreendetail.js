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
    const avartar = userInfo.length > 0 ? userInfo[0].image : null
    const usersigninId=userInfo.length > 0 ? userInfo[0].id : null
    const commentget = useSelector((state) => state.commentget)
    const { comments } = commentget
    const qty = 1;
    const like=0;
    console.log(userInfo)
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
                resolve(dispatch(createComment(productid, username, comment, date, time, rating,like,avartar)));
            }
            else {
                reject(
                    alert('b???n c???n ph???i ????ng nh???p tr?????c'),
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
        <div className="banner-bootom-w3-agileits mt-3">
            <div className="container">
                {/* tittle heading */}
                <h3 className="tittle-w3l-detail">Th??ng Tin Chi Ti???t
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
                            <span className="item_price mr-3">{product.price * 1000}VN??</span>
                            <label>Free delivery</label>
                        </p>
                        <Rating rating={product.rating} ></Rating>           
                        <div className="single-infoagile">
                            <p>
                                <i className="fas fa-hand-point-right" aria-hidden="true" />Th??ng tin xe
                                        </p>
                            <ul>
                                <li>
                                    <span>lo???i xe:  </span> {product.brand}
                                </li>
                                <li>
                                    <span>Bi???n s??? xe:  </span>{product.bien_so}
                                </li>
                                <li>
                                    <span>Th???i gian s??? d???ng:  </span> {product.TG_SD} n??m
                                            </li>
                                <li>
                                    chi ph?? thu?? / 1 ng??y :
                                                    <span className="item_price"> {product.price * 1000}VN?? </span>
                                </li>
                            </ul>
                        </div>

                        <div className="product-single-w3l">
                            <p>
                                <i className="fas fa-hand-point-right" aria-hidden="true" />Th??ng tin ng?????i cho thu??
                                        </p>
                            {userPF ? userPF.map((item) =>
                                <ul class="Information_Rent">
                                    <li>
                                        <span>H??? T??n:</span>{item.name ? item.name : null}
                                    </li>
                                    <li>
                                        <span>S??? ??i???n tho???i:</span> {item.SDT ? item.SDT : null}
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
                                        X??c nh???n
                                </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    B???n s??? nh???n ???????c email x??c nh???n ngay sau khi ?????t. Trong tr?????ng h???p b???n kh??ng nh???n ???????c email t??? ch??ng t??i, xin h??y ki???m tra th?? m???c Spam ho???c b??o l???i cho ch??ng t??i bi???t qua email
                                    </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Y??u c???u cho ????n h??ng
                                 </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li ><i class="fas fa-angle-double-right"></i>Ph?? ng??y ???????c t??nh d???a tr??n 24 gi???. V?? d???: n???u b???n nh???n xe m??y/xe tay ga v??o 8:00 s??ng ng??y 01/05 v?? tr??? l???i v??o 8:00 s??ng ng??y 02/05, b???n s??? ???????c t??nh ph?? cho 1 ng??y thu??</li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Y??u c???u ????? tu???i t???i thi???u: t??? 18 tu???i tr??? l??n
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    C??ng d??n Vi???t Nam ph???i xu???t tr??nh ch???ng minh th?? v?? b???ng l??i xe h???p l??? khi nh???n xe
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    ????? ph?? h???p v???i m???c ????ch gi???y t???, ng?????i mang h??? chi???u kh??ng ph???i l?? ng?????i Vi???t Nam ph???i xu???t tr??nh h??? chi???u khi nh???n xe m??y
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    B???n kh??ng c???n ph???i ?????t c???c. Tuy nhi??n, nh?? ??i???u h??nh s??? gi??? ch???ng minh th?? ho???c h??? chi???u c???a b???n v?? s??? ho??n tr??? khi xe m??y b???n thu?? ho???t ?????ng b??nh th?????ng
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Trong tr?????ng h???p b???n l??m h???ng ho???c m???t xe m??y, Klook, nh?? ??i???u h??nh v?? kh??ch h??ng s??? th???o lu???n ????? ????a ra th???a thu???n t???t nh???t
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Th??ng tin th??m
                                </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    <ul>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Vui l??ng lu??n tu??n th??? lu???t v?? quy ?????nh giao th??ng. Nh?? ??i???u h??nh kh??ng ch???u tr??ch nhi???m cho b???t k??? thi???t h???i ho???c vi ph???m giao th??ng ph??t sinh khi b???n thu??
                                    </li>
                                        <li><i class="fas fa-angle-double-right"></i>
                                    Nghi??m c???m l??i xe khi say r?????u ho???c s??? d???ng ch???t k??ch th??ch
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
                            <span onClick={() => setIsListening(prevState => !prevState)}>????</span>
                            : <span onClick={() => setIsListening(prevState => !prevState)}>???????</span>}
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
                            <option value="1">R???t T???</option>
                            <option value="2">T???</option>
                            <option value="3">C??ng T???t</option>
                            <option value="4">T???t</option>
                            <option value="5">R???t T???t</option>
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
