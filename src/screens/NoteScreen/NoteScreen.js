import React, { useEffect, useState } from 'react'
import BodyTable from '../../components/Note_ToDoList/BodyTable'
import BtnAdd_ND from '../../components/Note_ToDoList/BtnAdd_ND'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'
function NoteScreen() {
    const Todolist_Get = useSelector((state) => state.Todolist_Get)
    const { Todolist } = Todolist_Get
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const usersigninId = userInfo.length > 0 ? userInfo[0].id : null
    const dispatch = useDispatch();
    console.log(usersigninId)
    useEffect(() => {
        dispatch(GetTodolist(usersigninId))
        return () => {

        }
    }, [])
    return (
        <div>
            <div class="container">
                {Todolist.length > 0 ? (
                    <div>
                        <div class="Date_Todolist mt-3 mb-3">
                            <h3>{Todolist[0].date}</h3>
                        </div>
                        <BtnAdd_ND todolistId={Todolist[0].id}></BtnAdd_ND>
                        <table class="table mt-3">
                            <caption>List of users</caption>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nội Dung</th>
                                    <th scope="col">Ghi Chú</th>
                                    <th scope="col">Trạng Thái</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <BodyTable todolistId={Todolist[0].id}></BodyTable>

                        </table>
                    </div>
                ) : (<div></div>)}


            </div>


        </div>
    )
}

export default NoteScreen
