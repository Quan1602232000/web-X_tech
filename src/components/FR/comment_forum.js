import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserLikeCommentForum,
    PutLikeCommentForum,
    PushUserLikeCommentForum
} from '../../actions/Comment-forumActions'
function Comment_forum(props) {
    const { comment, usersignID } = props
    const getuserlikecommentforum = useSelector(state => state.getuserlikecommentforum)
    const { UL_Comment_Forum } = getuserlikecommentforum
    const [commentlike,setcommentlike]=useState(comment.like)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserLikeCommentForum(usersignID))
        return () => {

        }
    }, [])
    
    const onChangeLike =(like,id)=>{
        setcommentlike(like+1)
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutLikeCommentForum(id,like+1)),
                    dispatch(PushUserLikeCommentForum(id,usersignID))
            );           
            
        })
        promise.then(
            function () {
                dispatch(getUserLikeCommentForum(usersignID))
            });
    }
    const likeCheck = UL_Comment_Forum.find(x => x.Comment_ForumId === comment.id)


    return (
        <div class="card card-body card-commentcss">
            <div class="ui feed">
                <div class="event">
                    <div class="label">
                        <img src={comment.avartar} />
                    </div>
                    <div class="content">
                        <div class="summary">
                            <a>{comment.name}</a>
                            <div class="date">
                                {comment.date}
                            </div>
                        </div>
                        <div class="extra text">
                            {comment.comment}
                        </div>
                        {likeCheck ?
                            <div class="meta">
                                <a class="like">
                                    <i class="like icon like-css"></i> {commentlike} Likes
                                </a>
                            </div>
                            : <div class="meta">
                                <a type="button" onClick={()=>onChangeLike(comment.like,comment.id)} class="like">
                                    <i class="like icon"></i> {comment.like} Likes
                                </a>
                            </div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment_forum
