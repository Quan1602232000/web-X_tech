import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    getforumbyID,
    GetUserLikeForum,
    PostUserLikeForum,
    PutLikeForum
} from '../../actions/ForumActions';
import Modal_forum from './Modal_forum';

function Forum_item(props) {
    const { item, User_Like_Forum,usersigninID } = props
    const forrumgetbyid = useSelector((state) => state.forrumgetbyid);
    const { Forum_By_Id } = forrumgetbyid;
    const [forumlike,setforumlike]=useState(item.like)

    const dispatch = useDispatch();
    const Modalhandle = () => {
        dispatch(getforumbyID(item.id))
    }
    
    const onChangeLike = (id,like) => {
        setforumlike(like+1)
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutLikeForum(id,like+1)),
                    dispatch(PostUserLikeForum(id,usersigninID))
            );           
            
        })
        promise.then(
            function () {
                dispatch(GetUserLikeForum(usersigninID))
            });
    }

    const likecheck = User_Like_Forum.find(x => x.forumId === item.id)

    return (
        <div class="row mt-2 post-social ml-1 mb-4">
            <div href="" class="post-author">
                <img src={item.avatar}
                    alt="Nguyễn Trung Kiên" class="post-author-image" />
                <div class="post-author-info">
                    <h4 class="post-author-name">{item.Name}</h4>
                    <i class="fa fa-clock-o"></i>
                    <time class="post-author-time">{item.Date} / {item.place}</time>
                </div>
            </div>
            <div class="row post-social-item">
                <div class="row status__text ml-3 mt-2">
                    <div class="status__text--detail">
                        <p>{item.Status}</p>
                    </div>
                </div>
                <div class="row status__image ml-3 mt-2">
                    <div class="status__image--datail">
                        <img src={item.image} />
                    </div>
                </div>
                <hr />
                <div class="row status__react ml-3 mt-3">
                    <div class="status__react--btn ml-1 mt-2">
                        {likecheck ?
                            <div class="ui labeled button" tabindex="0">
                                <div class="ui red button">
                                    <i class="heart icon"></i> Like
                                </div>
                                <a class="ui basic red left pointing label">
                                    {forumlike}
                                </a>
                            </div> :
                            <div onClick={()=>onChangeLike(item.id,item.like)} class="ui labeled button" tabindex="0">
                                <div class="ui button">
                                    <i class="heart icon"></i> Like
                                </div>
                                <a class="ui basic label">
                                    {item.like}
                                </a>
                            </div>
                        }

                        <div onClick={Modalhandle} class="ui labeled button btn-comment" data-toggle="modal" data-target="#exampleModal" tabindex="0">
                            <div class="ui basic blue button">
                                <i class="fork icon"></i> Comments
                            </div>
                            <a class="ui basic left pointing blue label">
                                {item.Comment_Forum ? item.Comment_Forum.length : null}
                            </a>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <Modal_forum Forum_By_Id={Forum_By_Id}></Modal_forum>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum_item
