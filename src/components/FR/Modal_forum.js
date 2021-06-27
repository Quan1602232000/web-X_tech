import React, { useState } from 'react'
import Comment_forum from './comment_forum'
import { useDispatch, useSelector } from 'react-redux';
import { postCommentForum, getCommentForum } from '../../actions/Comment-forumActions'

function Modal_forum(props) {
    const { Forum_By_Id } = props
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const forumcommentget = useSelector((state) => state.forumcommentget);
    const { commentforumget } = forumcommentget;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const username = userInfo.length > 0 ? userInfo[0].displayName : null
    const avartar = userInfo.length > 0 ? userInfo[0].image : null
    const [comment, setComment] = useState('')
    const forumID = Forum_By_Id.id;
    const like = 0
    const usersignID = userInfo.length > 0 ? userInfo[0].id : null

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();

        const promise = new Promise((resolve, reject) => {
            resolve(dispatch(postCommentForum(forumID, username, comment, date, time, like, avartar)));
        })
        promise.then(
            function () {
                dispatch(getCommentForum(forumID))
            });
        promise.then(
            function () {
                setComment("")
            });
    }
    const DelGetcomment = () => {
        commentforumget.splice(0, commentforumget.length + 1)
    }
    return (
        <div class="modal-dialog modal_css" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button onClick={DelGetcomment} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body modal-body-forum">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="background-Status-modal-forum">
                                <div class="row">
                                    <div href="#" class="post-author ml-4">
                                        <img src={Forum_By_Id.avatar}
                                            class="post-author-image" />
                                        <div class="post-author-info">
                                            <h4 class="post-author-name">{Forum_By_Id.Name}</h4>
                                            <i class="fa fa-clock-o"></i>
                                            <time class="post-author-time">{Forum_By_Id.Date} /
                                                {Forum_By_Id.place}</time>
                                        </div>
                                    </div>
                                </div>
                                <div class="row status__text ml-3 mt-4">
                                    <div class="status__text--detail">
                                        <p>{Forum_By_Id.Status}</p>
                                    </div>
                                </div>
                                <div class="row status__image mt-2 mb-4">
                                    <div class="status__image--datail--modal ">
                                        <img src={Forum_By_Id.image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form onSubmit={submitHandler}>
                                <div class="ui left icon input mb-5 mt-3 ml-4 input_comment_forum">
                                    <input value={comment} class="" type="text" placeholder="Comments..." onChange={(e) => setComment(e.target.value)} />
                                    <i class="users icon"></i>
                                </div>
                            </form>
                            <div class="comment_height ml-4 mr-1">
                                {commentforumget.length > 0 ?
                                    commentforumget.map(comment =>
                                        <Comment_forum usersignID={usersignID} comment={comment}></Comment_forum>).reverse() :
                                    Forum_By_Id.Comment_Forum && Forum_By_Id.Comment_Forum.length > 0 ? Forum_By_Id.Comment_Forum.map(comment =>
                                        <Comment_forum usersignID={usersignID} comment={comment}></Comment_forum>
                                    ).reverse() : (<p>chưa có comment</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>

    )
}

export default Modal_forum
