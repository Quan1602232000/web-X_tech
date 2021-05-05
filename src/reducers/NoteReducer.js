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

function GettodolistReducer(state = { Todolist: [] }, action) {
    switch (action.type) {
      case NOTE_GET_TODOLISTS_REQUEST:
        return { loading: true, Todolist: [] };
      case NOTE_GET_TODOLISTS_SUCCESS:
        return { loading: false, Todolist: action.payload };
      case NOTE_GET_TODOLISTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}
function PosttodolistReducer(state = { Post_Todolist: {} }, action) {
    switch (action.type) {
      case NOTE_POST_TODOLISTS_REQUEST:
        return { loading: true, Post_Todolist: {} };
      case NOTE_POST_TODOLISTS_SUCCESS:
        return { loading: false, Post_Todolist: action.payload };
      case NOTE_POST_TODOLISTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}
function GetDataTodolistReducer(state = { Data_todolist: [] }, action) {
    switch (action.type) {
      case NOTE_GET_DATA_TODOLIST_REQUEST:
        return { loading: true, Data_todolist: [] };
      case NOTE_GET_DATA_TODOLIST_SUCCESS:
        return { loading: false, Data_todolist: action.payload };
      case NOTE_GET_DATA_TODOLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}
function PostDataTodolistReducer(state = { Post_Data_todolist: {} }, action) {
    switch (action.type) {
      case NOTE_POST_DATA_TODOLIST_REQUEST:
        return { loading: true, Post_Data_todolist: {} };
      case NOTE_POST_DATA_TODOLIST_SUCCESS:
        return { loading: false, Post_Data_todolist: action.payload };
      case NOTE_POST_DATA_TODOLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}
function PutDataTodolistReducer(state = { Put_Data_todolist: {} }, action) {
    switch (action.type) {
      case NOTE_PUT_DATA_TODOLIST_REQUEST:
        return { loading: true, Put_Data_todolist: {} };
      case NOTE_PUT_DATA_TODOLIST_SUCCESS:
        return { loading: false, Put_Data_todolist: action.payload };
      case NOTE_PUT_DATA_TODOLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}
export {
    GettodolistReducer,PosttodolistReducer,GetDataTodolistReducer,PostDataTodolistReducer,PutDataTodolistReducer
}