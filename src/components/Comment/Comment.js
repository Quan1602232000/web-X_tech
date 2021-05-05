import React,{useEffect,useState} from 'react';
import Rating from '../Raiting/Raiting'
import { useSelector, useDispatch } from 'react-redux';
import {getUserLike,PutLike,pushUserLike,getcomment} from '../../actions/CommentActions';
import './Comment.css'

function Comment(props) {
    const dispatch = useDispatch();
    const{key,comment,usersigninId,productid}=props
    // const [number,setnumber]=useState(0)
    const Getuserlike=useSelector((state)=>state.Getuserlike)
    const {userlike}= Getuserlike
    useEffect(() => {
        dispatch(getUserLike(usersigninId))
        return () => {
            
        }
    }, [])
    const like=userlike.find(x=>x.commentId===comment.id)
    const OnchangeLike=(id,like)=>{
        const LIKE=like+1;
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutLike(id,LIKE)),
                    dispatch(pushUserLike(id,usersigninId))
            );           
            
        })
        promise.then(
            function () {
                dispatch(getUserLike(usersigninId))
            });

        promise.then(
            function () {
                dispatch(getcomment(productid))
            }
        )
    }   
    return (
        <div key={comment.id}>
            <div class="media mt-4 mb-4">
                <div class="img-circle">
                    <img src="https://meocuchay.com/wp-content/uploads/2020/08/hinh-nen-chu-cho-dang-yeu_052334445.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="media-body">

                    <ul class="time-rply mb-2">
                        <li><a href="#URL" class="name mt-0 mb-2 d-block">{comment.name}</a>
                            {comment.date} - {comment.time}

                        </li>
                        <li class="reply-last">
                            {like?(<button type="button" class="btn btn-outline-danger"><i class="fas fa-heart mr-1"></i>{comment.like}</button>)
                        :(<button onClick={()=>OnchangeLike(comment.id,comment.like)} type="button" class="btn btn-outline-danger"><i class="fab fa-gratipay mr-1"></i>{comment.like}</button>)    
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
