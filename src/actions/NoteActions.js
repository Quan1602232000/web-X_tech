import {
    NOTE_POST_TODOLISTS_REQUEST,
    NOTE_POST_TODOLISTS_SUCCESS,
    NOTE_POST_TODOLISTS_FAIL,
    NOTE_GET_TODOLISTS_REQUEST,
    NOTE_GET_TODOLISTS_SUCCESS,
    NOTE_GET_TODOLISTS_FAIL,
    NOTE_POST_DATA_TODOLIST_REQUEST,
    NOTE_POST_DATA_TODOLIST_SUCCESS,
    NOTE_POST_DATA_TODOLIST_FAIL,
    NOTE_GET_DATA_TODOLIST_REQUEST,
    NOTE_GET_DATA_TODOLIST_SUCCESS,
    NOTE_GET_DATA_TODOLIST_FAIL,
    NOTE_PUT_DATA_TODOLIST_REQUEST,
    NOTE_PUT_DATA_TODOLIST_SUCCESS,
    NOTE_PUT_DATA_TODOLIST_FAIL,
    NOTE_DELETE_DATA_TODOLIST_REQUEST,
    NOTE_DELETE_DATA_TODOLIST_SUCCESS,
    NOTE_DELETE_DATA_TODOLIST_FAIL
} from '../constants/NoteConstant';

import axios from 'axios';

const GetTodolist =(userId)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_GET_TODOLISTS_REQUEST, payload:userId });
        const { data } = await axios.get("http://localhost:4000/api/todolists/?userId="+userId);
            dispatch({
                type: NOTE_GET_TODOLISTS_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_GET_TODOLISTS_FAIL, payload: error.message });
    }
}

const PostTodolist =(userId,date)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_POST_TODOLISTS_REQUEST, payload:{userId,date} });
        const { data } = await axios.post("http://localhost:4000/api/todolists",{userId,date});
            dispatch({
                type: NOTE_POST_TODOLISTS_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_POST_TODOLISTS_FAIL, payload: error.message });
    }
}

const GetDataTodolist =(todolistId)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_GET_DATA_TODOLIST_REQUEST, payload:todolistId });
        const { data } = await axios.get("http://localhost:4000/api/data_todolist/?todolistId="+todolistId);
            dispatch({
                type: NOTE_GET_DATA_TODOLIST_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_GET_DATA_TODOLIST_FAIL, payload: error.message });
    }
}
const PostDataTodolist =(todolistId,Place,Note,status)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_POST_DATA_TODOLIST_REQUEST, payload:{todolistId,Place,Note,status} });
        const { data } = await axios.post("http://localhost:4000/api/data_todolist",{todolistId,Place,Note,status});
            dispatch({
                type: NOTE_POST_DATA_TODOLIST_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_POST_DATA_TODOLIST_FAIL, payload: error.message });
    }
}
const PutDataTodolist =(id,todolistId,Place,Note,status)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_PUT_DATA_TODOLIST_REQUEST, payload:{id,todolistId,Place,Note,status} });
        const { data } = await axios.put("http://localhost:4000/api/data_todolist/"+id,{todolistId,Place,Note,status});
            dispatch({
                type: NOTE_PUT_DATA_TODOLIST_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_PUT_DATA_TODOLIST_FAIL, payload: error.message });
    }
}
const DeleteDataTodolist =(id)=> async (dispatch)=>{
    try{
        dispatch({ type: NOTE_DELETE_DATA_TODOLIST_REQUEST, payload:id });
        const { data } = await axios.delete("http://localhost:400:0/api/data_todolist/"+id);
            dispatch({
                type: NOTE_DELETE_DATA_TODOLIST_SUCCESS, payload: data
            });
    }
    catch (error) {
        dispatch({ type: NOTE_DELETE_DATA_TODOLIST_FAIL, payload: error.message });
    }
}
export{
    GetTodolist,PostTodolist,GetDataTodolist,PostDataTodolist,PutDataTodolist,DeleteDataTodolist
}