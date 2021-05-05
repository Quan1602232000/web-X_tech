import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetTodolist, PostTodolist, GetDataTodolist, PostDataTodolist, PutDataTodolist, DeleteDataTodolist } from '../../actions/NoteActions'

function BodyTable(props) {
    const { todolistId } = props
    const Data_todolist_Get = useSelector((state) => state.Data_todolist_Get)
    const { Data_todolist } = Data_todolist_Get
    const dispatch = useDispatch();
    console.log(Data_todolist)
    useEffect(() => {
        dispatch(GetDataTodolist(todolistId))
        return () => {

        }
    }, [])
    return (
        <tbody>
            {Data_todolist.length > 0 ? Data_todolist.map((data) => (
                <tr>
                    <th scope="row">1</th>
                    <td>{data.Place}</td>
                    <td>{data.Note}</td>
                    <td>{data.status==true?"Hoàn Thành":"Chưa Hoàn Thành"}</td>
                    <td>@mdo</td>
                </tr>
            )):(<div></div>)}

        </tbody>
    )
}

export default BodyTable
