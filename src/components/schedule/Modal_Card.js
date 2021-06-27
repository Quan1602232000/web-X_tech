import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ReviewList} from '../../actions/ReviewActions'
import Rating from '../Raiting/Raiting'
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
import './Modal_Card.css'

function Modal_Card(props) {
    const {todolistId}=props
    const [Time_to_go, setTime_to_go] = useState('1:AM')
    const [Time_to_visit, setTime_to_visit] = useState('1h')
    const [Transport, setTransport] = useState('Máy Bay')
    const [Note, setNote] = useState('')
    const [Place,setPalce]=useState('')
    const reviewList=useSelector((state)=>state.reviewList)
    const {Reviews}=reviewList
    const dispatch = useDispatch();
    const city="Đà Nẵng"
    useEffect(() => {
        dispatch(ReviewList(city))
        return () => {

        }
    }, [city])
    const GetName =(name)=>{
        setPalce(name)
    }
    
    const SubmitHandel=()=>{
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PostDataTodolist(todolistId,Place, Time_to_go, Time_to_visit, Transport,Note))
            );
        })
        promise.then(
            function () {
                dispatch(GetDataTodolist(todolistId))
            });
    }
    return (
        <div>
            <div class="row mt-3 mb-3 card-address">
                {Reviews.length>0?Reviews.map((item)=>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="card border-light mt-2 mb-1" style={{ width: "16rem" }}>
                        <img class="card-img-top" src={item.image} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-title mb-0">{item.Name}</p>
                            <Rating rating={item.raiting} ></Rating>
                            <a onClick={()=>GetName(item.Name)} data-toggle="modal" data-target="#exampleModal2" href="#" class="btn btn-primary mt-3"><i class="fas fa-plus-square mr-2"></i>Thêm</a>
                            <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Thêm Thông Tin</h5>
                                            <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body modal_test">
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Thời Gian Đến</label>
                                                    <select value={Time_to_go} onChange={(e) => setTime_to_go(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                        <option value="1:AM">1:AM</option>
                                                        <option value="2:AM">2:AM</option>
                                                        <option value="3:AM">3:AM</option>
                                                        <option value="4:AM">4:AM</option>
                                                        <option value="5:AM">5:AM</option>
                                                        <option value="6:AM">6:AM</option>
                                                        <option value="7:AM">7:AM</option>
                                                        <option value="8:AM">8:AM</option>
                                                        <option value="9:AM">9:AM</option>
                                                        <option value="10:AM">10:AM</option>
                                                        <option value="11:AM">11:AM</option>
                                                        <option value="12:AM">12:AM</option>
                                                        <option value="1:PM">1:PM</option>
                                                        <option value="2:PM">2:PM</option>
                                                        <option value="3:PM">3:PM</option>
                                                        <option value="4:PM">4:PM</option>
                                                        <option value="5:PM">5:PM</option>
                                                        <option value="6:PM">6:PM</option>
                                                        <option value="7:PM">7:PM</option>
                                                        <option value="8:PM">8:PM</option>
                                                        <option value="9:PM">9:PM</option>
                                                        <option value="10:PM">10:PM</option>
                                                        <option value="11:PM">11:PM</option>
                                                        <option value="12:PM">12:PM</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Thời Gian Tham Quan</label>
                                                    <select value={Time_to_visit} onChange={(e) => setTime_to_visit(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                        <option value="1h">1h</option>
                                                        <option value="2h">2h</option>
                                                        <option value="3h">3h</option>
                                                        <option value="4h">4h</option>
                                                        <option value="5h">5h</option>
                                                        <option value="6h">6h</option>
                                                        <option value="7h">7h</option>
                                                        <option value="8h">8h</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Phương Tiện Di Chuyển</label>
                                                    <select value={Transport} onChange={(e) => setTransport(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                        <option value="Máy Bay">Máy Bay</option>
                                                        <option value="Xe Máy">Xe Máy</option>
                                                        <option value="Đi Bộ">Đi Bộ</option>
                                                        <option value="Taxi/Car">Taxi/Car</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Ghi Chú</label>
                                                    <input value={Note} onChange={(e) => setNote(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Ghi Chú" />
                                                </div>
                                                <button data-dismiss="modal" onClick={SubmitHandel} type="button" class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):(<div></div>)}
                
            </div>
        </div>
    )
}

export default Modal_Card
