import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
import './list_schedule.css'

function List_schedule(props) {
    const [Time_to_go,setTime_to_go]=useState('')
    const [Time_to_visit,setTime_to_visit]=useState('')
    const [Transport,setTransport]=useState('')
    const [Note,setNote]=useState('')
    const [idData,setidData]=useState('')
    const { todolistId } = props
    const Data_todolist_Get = useSelector((state) => state.Data_todolist_Get)
    const { Data_todolist } = Data_todolist_Get
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetDataTodolist(todolistId))
        return () => {

        }
    }, [todolistId])
    const DataInFo=(Time_to_go,Time_to_visit,Transport,Note,id)=>{
        setTime_to_go(Time_to_go)
        setTime_to_visit(Time_to_visit)
        setTransport(Transport)
        setNote(Note)
        setidData(id)
    }
    const OnSubmitHandel =()=>{
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutDataTodolist(idData,todolistId,Time_to_go,Time_to_visit,Transport,Note))
            );
        })
        promise.then(
            function () {
                dispatch(GetDataTodolist(todolistId))
            });
        promise.then(
            function () {
                alert('Thông tin của bạn được chỉnh sửa thành công')
            });
        
    }
    const OnDeleteSchedule=(id)=>{
        alert('Bạn có chắc chắn muốn xóa thông tin này')
        const promise = new Promise(function (resolve, reject) {
            resolve( dispatch(DeleteDataTodolist(id))
            );
        })
        promise.then(
            function () {
                dispatch(GetDataTodolist(todolistId))
            });
       
    }
    return (
        <div>
            {Data_todolist.length > 0 ? Data_todolist.map((item) =>
                <div class="row Day_CiTy">
                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-2">
                        <div class="name_schedule">
                            <p class="Place"><i class="fas fa-angle-double-right mr-2">{item.Place}</i></p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-2">
                        <ul class="Btn_schedule">
                            <li class="Btn_schedule_item mr-1">
                                <button onClick={() => DataInFo(item.Time_to_go, item.Time_to_visit, item.Transport, item.Note,item.id)} data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-info"><i class="fas fa-hammer"></i></button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Thông Tin</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form onSubmit={OnSubmitHandel}>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Thời Gian Đến</label>
                                                        <select value={Time_to_go} onChange={(e)=>setTime_to_go(e.target.value)} class="custom-select" id="inputGroupSelect01">
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
                                                        <select value={Time_to_visit} onChange={(e)=>setTime_to_visit(e.target.value)} class="custom-select" id="inputGroupSelect01">
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
                                                        <select value={Transport} onChange={(e)=>setTransport(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                            <option value="Máy Bay">Máy Bay</option>
                                                            <option value="Xe Máy">Xe Máy</option>
                                                            <option value="Đi Bộ">Đi Bộ</option>
                                                            <option value="Taxi/Car">Taxi/Car</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Ghi Chú</label>
                                                        <input value={Note} onChange={(e)=>setNote(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Ghi Chú" />
                                                    </div>
                                                    <button data-dismiss="modal" onClick={OnSubmitHandel} type="button" class="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="Btn_schedule_item">
                                <button onClick={()=>OnDeleteSchedule(item.id)} type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (<div></div>)}

        </div>
    )
}

export default List_schedule
