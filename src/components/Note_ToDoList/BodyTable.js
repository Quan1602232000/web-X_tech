import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
import './BodyTable.css'
import BtnRepair_Delete from './BtnRepair_Delete'

function BodyTable(props) {
    const { todolistId } = props
    const Data_todolist_Get = useSelector((state) => state.Data_todolist_Get)
    const { Data_todolist } = Data_todolist_Get
    const GetDatatodolist_id = useSelector((state) => state.GetDatatodolist_id)
    const { Data_todolist_ID } = GetDatatodolist_id
    const [DES, setDES] = useState("")
    const [Note, setNote] = useState("")
    const [Status, setStatus] = useState(true)
    const [idData,setidData]=useState("")
    const dispatch = useDispatch();
    const onClickRepair = (place,note,status,id) => {
        setDES(place)
        setNote(note)
        setStatus(status)
        setidData(id)
    };
    console.log(Data_todolist)
    useEffect(() => {
        dispatch(GetDataTodolist(todolistId))
        return () => {

        }
    }, [])
    const onDeleteHanDle =(id)=>{
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(DeleteDataTodolist(id))
            );

        })
        promise.then(
            function () {
                dispatch(GetDataTodolist(todolistId))
            });
    }
    

    return (
        <tbody>
            {Data_todolist.length > 0 ? Data_todolist.map((data) => (
                <tr>
                    <th scope="row">1</th>
                    <td>{data.Place}</td>
                    <td>{data.Note}</td>
                    <td>{data.status == true ? "Hoàn Thành" : "Chưa Hoàn Thành"}</td>
                    <td>
                        <ul class="btn_list">
                            <li class="btn_item mr-2">
                                <button onClick={()=>onClickRepair(data.Place,data.Note,data.status,data.id)} type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal2">
                                    <i class="fas fa-hammer"></i> Sửa
                                </button>
                                <BtnRepair_Delete DES={DES} Note={Note} Status={Status} idData={idData} todolistId={todolistId} ></BtnRepair_Delete>
                            </li>
                            <li class="btn_item">
                                <button onClick={()=>onDeleteHanDle(data.id)} type="button" class="btn btn-danger" data-toggle="modal">
                                    <i class="fas fa-trash-alt"></i> Xóa
                                </button>
                            </li>
                        </ul>
                    </td>
                </tr>
            )) : (<div></div>)}

        </tbody>
    )
}

export default BodyTable
