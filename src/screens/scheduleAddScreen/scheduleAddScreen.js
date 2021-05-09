import React, { useEffect, useState } from 'react'
import './scheduleAddScreen.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { PostTodolist } from '../../actions/NoteActions'
import moment from 'moment';
import { Link } from 'react-router-dom'


function ScheduleAddScreen(props) {

    const [Dater, setDate] = useState(new Date())
    const [city, setcity] = useState('Đà Nẵng')
    const date = moment(Dater).format("L");
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const dispatch = useDispatch();
    console.log(city)
    const SubmitAddSchedule = () => {
        dispatch(PostTodolist(usersigninId, date))
    }
    return (
        <div class="background_Schedule container-fluid">

            <div class="row">

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                    <div class="row ml-3 mt-5">
                        <div class="Title_Main">
                            <h3>Lên Lịch Trình Cho Chuyến Đi Của Bạn</h3>
                        </div>

                    </div>

                    <div class="row ml-3 mt-5">
                        <form>
                            <div class="form-group Lable_Style">
                                <label for="formGroupExampleInput">Example label</label>
                                <select value={city} onChange={(e) => setcity(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                    <option value="Đà Nẵng">Đà Nẵng</option>
                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hải Phòng">Hải Phòng</option>
                                </select>
                            </div>
                            <div class="form-group Lable_Style">
                                <label for="formGroupExampleInput2">Another label</label><br></br>
                                <DatePicker selected={Dater}
                                    onChange={(date) => setDate((date))}
                                    dateFormat="yyyy/dd/MM"
                                >
                                </DatePicker>
                            </div>
                            <Link to={'/scheduleScreen/?city=' + city} onClick={SubmitAddSchedule} type="button" class="btn btn-success">Thêm Lịch Trình</Link>
                        </form>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default ScheduleAddScreen
