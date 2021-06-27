import React, { useEffect, useState } from 'react'
import './ForumScreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { getforumbtcity, postforum, GetUserLikeForum } from '../../actions/ForumActions';
import Forum_item from '../../components/FR/forum_item';
import Accordion from '../../components/FR/accordion';
import {getforumbyName} from '../../actions/ForumActions'


function ForumScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const getuserlikeforum = useSelector((state) => state.getuserlikeforum);
    const { User_Like_Forum } = getuserlikeforum;
    const [image, setImage] = useState('')
    const [Loading, setLoading] = useState(false)
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const username = userInfo.length > 0 ? userInfo[0].displayName : null
    const avartar = userInfo.length > 0 ? userInfo[0].image : null
    const usersigninID = userInfo.length > 0 ? userInfo[0].id : null
    const [status, setstatus] = useState('')
    const [place,setplace]=useState('')
    const like = 0
    const city = "Đà Nẵng"
    const forumgetbyname = useSelector((state) => state.forumgetbyname);
    const { Forum_By_Name } = forumgetbyname;

    const updateforum = (Name) => {
        setplace(Name)
        dispatch(getforumbyName(Name,city)) 
    }
    console.log(place)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'image_MXH')
        setLoading(true)
        const res = await fetch(
            '		https://api.cloudinary.com/v1_1/quancloud/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    const forumbycity = useSelector((state) => state.forumbycity)
    const { loading, Forum_By_City } = forumbycity
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(dispatch(getforumbtcity(city)), 2000)
        return () => {

        }
    }, [])

    useEffect(() => {
        dispatch(GetUserLikeForum(usersigninID))
        return () => {

        }
    }, [])

    const SubmitForum = () => {
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(postforum(username, avartar, date, time, status, image, like, city, place)));
        })
        promise.then(
            function () {
                dispatch(getforumbyName(place,city)) 
            });
    }
    // const btntest=()=>{
    //     dispatch(getforumbtcity(city))
    // }


    return (
        <div class="container-fluid Forum__Backround mt-3">
            <div class="row social">
                <div class="col-4 mr-5 Sites__list--background">
                    <div class="pt-4 pl-4">
                        <div class="row ">
                            <div href="" class="post-author">
                                <img src={userInfo.length > 0 ? userInfo[0].image : null}
                                    class="post-author-image" />
                                <div class="post-author-info">
                                    <h4 class="post-author-name">{userInfo.length > 0 ? userInfo[0].displayName : null}</h4>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row mt-3">
                            <Accordion updateforum={updateforum} city={city}></Accordion>
                        </div>
                    </div>
                </div>

                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 social-height">
                    <div class="row social_status--margin">
                        <ul class="social_status">
                            <li>
                                <img src={userInfo.length > 0 ? userInfo[0].image : null}
                                    class="social_image" alt="" />
                            </li>
                            <li>
                                <button type="button" class="social_button" data-toggle="modal" data-target="#exampleModal1">{userInfo.length > 0 ? userInfo[0].displayName : null} ơi,
                                    bạn đang nghỉ gì thế</button>
                            </li>
                        </ul>
                    </div>
                    {Forum_By_Name.length > 0 ? Forum_By_Name.map(item =>
                        <Forum_item usersigninID={usersigninID} User_Like_Forum={User_Like_Forum} item={item}></Forum_item>
                    ).reverse() : (<p>chưa có forum</p>)}
                        {/* // loading ? <div class="loader"></div> :
                        //     Forum_By_City.length > 0 ? Forum_By_City.map((item, index) =>
                        //         <Forum_item usersigninID={usersigninID} User_Like_Forum={User_Like_Forum} item={item} index={index}></Forum_item>
                        //     ).reverse() :
                        //         (<p>chưa có forum</p>) */}

                </div>
            </div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Tạo bài viết</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div href="" class="post-author">
                                <img src={userInfo.length > 0 ? userInfo[0].image : null}
                                    alt="Nguyễn Trung Kiên" class="post-author-image" />

                                <div class="post-author-info">
                                    <h4 class="post-author-name">{userInfo.length > 0 ? userInfo[0].displayName : null}</h4>
                                    <select class="post-author-status">
                                        <option value="">Chỉ mình tôi</option>
                                        <option value="">Công khai</option>
                                    </select>
                                </div>
                            </div>
                            {Loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img class="mt-3" src={image} style={{ width: '465px' }} />

                            )}
                            <textarea class="form-control mt-3 social_cmt"
                                rows="5"
                                placeholder="Kiên ơi, bạn đang nghĩ gì thế?"
                                onChange={(e) => setstatus(e.target.value)}>

                            </textarea>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Upload</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" onChange={uploadImage} class="custom-file-input" id="inputGroupFile01" />
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button data-dismiss="modal" onClick={SubmitForum} type="button" class="btn btn-primary btn_post">Đăng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumScreen
