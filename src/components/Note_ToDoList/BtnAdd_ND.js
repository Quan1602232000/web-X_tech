
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
import { NOTE_DELETE_DATA_TODOLIST_FAIL } from '../../constants/NoteConstant';

function BtnAdd_ND(props) {
    const { todolistId } = props
    const [DES, setDES] = useState("")
    const [Note, setNote] = useState("")
    const [Status, setStatus] = useState(true)
    const dispatch = useDispatch();
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const promise = new Promise(function (resolve, reject) {
            resolve(dispatch(PostDataTodolist(todolistId, DES, Note, Status))
            );

        })
        promise.then(
            function () {
                dispatch(GetDataTodolist(todolistId))
            });
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Thêm Nội Dung
                        </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">THÊM NỘI DUNG</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={onHandleSubmit}>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Nội Dung</label>
                                    <input onChange={(e) => setDES(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Ghi Chú</label>
                                    <input onChange={(e) => setNote(e.target.value)} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Trạng Thái</label>
                                    <select value={Status} onChange={(e) => setStatus(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                        <option value="true">Hoàn Thành</option>
                                        <option value="false">Chưa Hoàn Thành</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary" dismiss="modal">Save changes</button>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtnAdd_ND
