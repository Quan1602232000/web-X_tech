import React, { useEffect, useState } from 'react'
import './scheduleScreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
import List_schedule from '../../components/schedule/list_schedule'

function ScheduleScreen() {
    const Todolist_Get = useSelector((state) => state.Todolist_Get)
    const { Todolist } = Todolist_Get
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const [todolistId,settodolistId]=useState('')
    const dispatch = useDispatch();
    console.log(todolistId)
    useEffect(() => {
        dispatch(GetTodolist(usersigninId))
        return () => {

        }
    }, [])
    const OnsettodolistId =(id)=>{
        settodolistId(id)
    }
    return (
        <div class="container-fluid">

            <div class="row">

                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 ml-5 listDay">
                    {Todolist.length > 0 ? Todolist.map((item) =>
                        <div class="row mt-2">

                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button onClick={()=>OnsettodolistId(item.id)} type="button" class="btn btn-outline-danger">{item.date}<i class="fas fa-calendar-day ml-2"></i></button>
                            </div>

                        </div>
                    ) : (<div></div>)}


                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 ml-2 listschedule">
                    <div class="row mb-5 mt-1 ml-1">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p>Ngày: Đà Nẵng</p>
                        </div>
                    </div>
                    <List_schedule todolistId={todolistId}></List_schedule>
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 listAddress  ml-2">
                    <div class="row mt-3 mb-3 card-address">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="card mt-2" style={{ width: "12rem" }}>
                                <img class="card-img-top" src="https://dulichkhampha24.com/wp-content/uploads/2018/12/ba-na-hill.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <a data-toggle="modal" data-target="#exampleModal2" href="#" class="btn btn-primary">Go somewhere</a>
                                    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Thêm Thông Tin</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="formGroupExampleInput">Thời Gian Đến</label>
                                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Thời Gian Đến" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="formGroupExampleInput">Thời Gian Tham Quan</label>
                                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Thời Gian Tham Quan" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="formGroupExampleInput">Phương Tiện Di Chuyển</label>
                                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Phương Tiện Di Chuyển" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="formGroupExampleInput">Ghi Chú</label>
                                                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ghi Chú" />
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="card mt-2" style={{ width: "12rem" }}>
                                <img class="card-img-top" src="https://dulichkhampha24.com/wp-content/uploads/2018/12/ba-na-hill.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="card mt-2" style={{ width: "12rem" }}>
                                <img class="card-img-top" src="https://dulichkhampha24.com/wp-content/uploads/2018/12/ba-na-hill.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="card mt-2" style={{ width: "12rem" }}>
                                <img class="card-img-top" src="https://dulichkhampha24.com/wp-content/uploads/2018/12/ba-na-hill.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="card mt-2" style={{ width: "12rem" }}>
                                <img class="card-img-top" src="https://dulichkhampha24.com/wp-content/uploads/2018/12/ba-na-hill.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div  data-target="#navbar-example2" >
                        
                    </div> */}

                </div>
            </div>

        </div >
    )
}

export default ScheduleScreen
