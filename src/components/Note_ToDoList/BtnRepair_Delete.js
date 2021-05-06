import React, { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'


function BtnRepair_Delete(props) {
    const{todolistId,DES,Note,Status,idData}=props
    const [des, setDES] = useState(props.DES)
    const [note, setNote] = useState(Note)
    const [status, setStatus] = useState(Status)

    // const [idData,setidData]=useState("")
    console.log(des)
    const dispatch = useDispatch();
    const onHandleSubmitRepair = (e) => {
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PutDataTodolist(idData,todolistId, des, note, status))
            );
        })
       
    }
    return (
        <ul class="btn_list">
            <li class="btn_item mr-2">               
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">SỬA NỘI DUNG</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={onHandleSubmitRepair}>
                                    <div class="form-group">
                                        <label for="formGroupExampleInput">Nội Dung</label>
                                        <input value={des} onChange={(e)=>setDES(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                    </div>
                                    <div class="form-group">
                                        <label for="formGroupExampleInput2">Ghi Chú</label>
                                        <input value={note} onChange={(e)=>setNote(e.target.value)} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                    </div>
                                    <div class="form-group">
                                        <label for="formGroupExampleInput3">Trạng Thái</label>
                                        <select value={status} onChange={(e)=>setStatus(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                            <option value="true">Hoàn Thành</option>
                                            <option value="false">Chưa Hoàn Thành</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary" dismiss="modal">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </li>           
        </ul>
    )
}

export default BtnRepair_Delete
