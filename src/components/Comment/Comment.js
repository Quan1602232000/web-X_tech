import React,{useEffect} from 'react'

function Comment(props) {
    const{key,comment}=props
    return (
        <div key={key}>
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
                                    <a href="#reply" class="reply">
                                        Reply</a>
                                </li>
                            </ul>
                            <p>{comment.comment}</p>
                        </div>
                    </div>        
        </div>
    )
}

export default Comment
