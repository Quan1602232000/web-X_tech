import React, { useEffect, useState } from 'react'
import './scheduleScreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist} from '../../actions/NoteActions'
import List_schedule from '../../components/schedule/list_schedule'
import Modal_Card from '../../components/schedule/Modal_Card'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function ScheduleScreen(props) {
    const city = props.location.search ? props.location.search.split("=")[1] : 1;
    const [Dater, setDate] = useState(new Date())
    const date = moment(Dater).format("L");
    const Todolist_Get = useSelector((state) => state.Todolist_Get)
    const { Todolist } = Todolist_Get
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const [todolistId, settodolistId] = useState('')
    const dispatch = useDispatch();
    console.log(todolistId)
    useEffect(() => {
        dispatch(GetTodolist(usersigninId))
        return () => {

        }
    }, [])
    const OnsettodolistId = (id) => {
        settodolistId(id)
    }
    const SubmitDate = () => {
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PostTodolist(usersigninId, date))
            );
        })
        promise.then(
            function () {
                dispatch(GetTodolist(usersigninId))
            });
    }
    return (
        <div class="container-fluid">

            <div class="row">

                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 ml-5 listDay">

                    <div class="row mt-3 ml-2">
                        <div class="alert alert-danger" role="alert">
                            Danh Sách Ngày
                        </div>
                    </div>
                    <hr></hr>
                    {Todolist.length > 0 ? Todolist.map((item) =>
                        <div class="row list_Day mt-2 mb-2">

                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button onClick={() => OnsettodolistId(item.id)} type="button" class="btn btn-outline-danger">{item.date}<i class="fas fa-calendar-day ml-2"></i></button>
                            </div>

                        </div>
                    ) : (<div></div>)}

                    <div class="row btn_add_time mt-3">

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">Thêm Ngày</button>
                        </div>
                        <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Thêm Ngày</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form onSubmit={SubmitDate}>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput">Ngày : </label>
                                                <DatePicker selected={Dater}
                                                    onChange={(date) => setDate((date))}
                                                    dateFormat="dd/MM/yyyy">
                                                </DatePicker>
                                            </div>
                                            <button data-dismiss="modal" onClick={SubmitDate} type="button" class="btn btn-primary mt-3">Thêm</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 ml-2 listschedule">
                    <div class="row mb-3 mt-3 ">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="alert alert-primary" role="alert">
                                Danh Sách Địa Điểm
                            </div>
                        </div>
                    </div>
                    <List_schedule todolistId={todolistId}></List_schedule>
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 listAddress  ml-2">
                    <Modal_Card city={city} todolistId={todolistId}></Modal_Card>
                    {/* <div  data-target="#navbar-example2" >
                        
                    </div> */}

                </div>
            </div>

        </div >
    )
}

export default ScheduleScreen
