import React, { useEffect, useState } from 'react';
import Rating from '../Raiting/Raiting'
import { useSelector, useDispatch } from 'react-redux';
import {
    getcommentreview,
    getUserLikereview,
    pushUserLikereview,
    PutLikereview
} from '../../actions/Comment-reviewAcions';
import './Comment_review.css'

function Comment(props) {
    const dispatch = useDispatch();
    const { key, comment, usersigninId, ReviewId } = props
    const GetUserlikeReview = useSelector((state) => state.GetUserlikeReview)
    const { userlikereview } = GetUserlikeReview
    useEffect(() => {
        dispatch(getUserLikereview(usersigninId))
        return () => {

        }
    }, [])
    const OnchangeLike=(id,like)=>{
        const LIKE=like+1;
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutLikereview(id,LIKE)),
                    dispatch(pushUserLikereview(id,usersigninId))
            );           
            
        })
        promise.then(
            function () {
                dispatch(getUserLikereview(usersigninId))
            });

        promise.then(
            function () {
                dispatch(getcommentreview(ReviewId))
            }
        )
    }   
    const like = userlikereview.find(x => x.commentId === comment.id)
    return (
        <div key={comment.id}>
            <div class="media mt-4 mb-4">
                <div class="img-circle">
                    <img src={comment.avartar} class="img-fluid" alt="..." />
                </div>
                <div class="media-body">

                    <ul class="time-rply mb-2">
                        <li><a href="#URL" class="name mt-0 mb-2 d-block">{comment.name}</a>
                            {comment.date} - {comment.time}

                        </li>
                        <li class="reply-last">
                            {like ? (<button type="button" class="btn btn-outline-danger"><i class="fas fa-heart mr-1"></i>{comment.like}</button>)
                                : (<button onClick={() => OnchangeLike(comment.id, comment.like)} type="button" class="btn btn-outline-danger"><i class="fab fa-gratipay mr-1"></i>{comment.like}</button>)
                            }
                            
                        </li>
                    </ul>
                    <p>{comment.comment}</p>
                    <Rating rating={comment.rating} ></Rating>
                    {/* {like?(<div> <p>Đã like</p></div>):<div><p>chưa like</p></div>} */}
                </div>
            </div>

        </div>
    )
}

export default Comment
