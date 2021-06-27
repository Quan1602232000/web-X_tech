import{
    FORUM_GET_BY_CITY_REQUEST,
    FORUM_GET_BY_CITY_SUCCESS,
    FORUM_GET_BY_CITY_FAIL,
    FORUM_POST_BY_BRAND_AND_PALCE_REQUEST,
    FORUM_POST_BY_BRAND_AND_PALCE_SUCCESS,
    FORUM_POST_BY_BRAND_AND_PALCE_FAIL,
    FORUM_GET_BY_ID_REQUEST,
    FORUM_GET_BY_ID_SUCCESS,
    FORUM_GET_BY_ID_FAIL,
    FORUM_PUT_LIKE_REQUEST,
    FORUM_PUT_LIKE_SUCCESS,
    FORUM_PUT_LIKE_FAIL,
    FORUM_GET_USER_LIKE_REQUEST,
    FORUM_GET_USER_LIKE_SUCCESS,
    FORUM_GET_USER_LIKE_FAIL,
    FORUM_POST_USER_LIKE_REQUEST,
    FORUM_POST_USER_LIKE_SUCCESS,
    FORUM_POST_USER_LIKE_FAIL,
    FORUM_GET_BY_NAME_REQUEST,
    FORUM_GET_BY_NAME_SUCCESS,
    FORUM_GET_BY_NAME_FAIL
    } from '../constants/ForumConstant';
import axios from 'axios';

const getforumbtcity =(city) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_GET_BY_CITY_REQUEST ,payload:city});
        const {data} = await axios.get(`http://localhost:4000/api/forums?city=${city}&_embed=Comment_Forum`);
            dispatch({type:FORUM_GET_BY_CITY_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_GET_BY_CITY_FAIL, payload: error.message });
    }
}

const getforumbyID =(ID) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_GET_BY_ID_REQUEST ,payload:ID});
        const {data} = await axios.get(`http://localhost:4000/api/forums/${ID}?_embed=Comment_Forum`);
            dispatch({type:FORUM_GET_BY_ID_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_GET_BY_ID_FAIL, payload: error.message });
    }
}

const getforumbyName =(name,city) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_GET_BY_NAME_REQUEST ,payload:{name,city}});
        if(name==''){
            const {data} = await axios.get(`http://localhost:4000/api/forums?city=${city}&_embed=Comment_Forum`);
            dispatch({type:FORUM_GET_BY_CITY_SUCCESS, payload:data
            });
        }
        else{
            const {data} = await axios.get(`http://localhost:4000/api/forums?place=${name}&_embed=Comment_Forum`);
            dispatch({type:FORUM_GET_BY_NAME_SUCCESS, payload:data
            });
        }
        
            
    }
    catch(error){
        dispatch({ type: FORUM_GET_BY_NAME_FAIL, payload: error.message });
    }
}

const GetUserLikeForum =(userId) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_GET_USER_LIKE_REQUEST , payload:userId});
        const {data} = await axios.get(`http://localhost:4000/api/User_Like_Forum?userId=${userId}`);
            dispatch({type:FORUM_GET_USER_LIKE_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_GET_USER_LIKE_FAIL, payload: error.message });
    }
}

const PostUserLikeForum =(forumId,userId) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_POST_USER_LIKE_REQUEST , payload:{forumId,userId}});
        const {data} = await axios.post(`http://localhost:4000/api/User_Like_Forum`,{forumId,userId});
            dispatch({type:FORUM_POST_USER_LIKE_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_POST_USER_LIKE_FAIL, payload: error.message });
    }
}

const PutLikeForum =(forumId,like) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_PUT_LIKE_REQUEST , payload:{forumId,like}});
        const {data} = await axios.patch(`http://localhost:4000/api/forums/${forumId}`,{like});
            dispatch({type:FORUM_PUT_LIKE_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_PUT_LIKE_FAIL, payload: error.message });
    }
}

const postforum =(Name,avatar,Date,Time,Status,image,like,city,place) => async (dispatch) =>{
    try{
        dispatch({type: FORUM_POST_BY_BRAND_AND_PALCE_REQUEST , payload:{Name,avatar,Date,Time,Status,image,like,city,place}});
        const {data} = await axios.post("http://localhost:4000/api/forums",{Name,avatar,Date,Time,Status,image,like,city,place});
            dispatch({type:FORUM_POST_BY_BRAND_AND_PALCE_SUCCESS, payload:data
            });
            
    }
    catch(error){
        dispatch({ type: FORUM_POST_BY_BRAND_AND_PALCE_FAIL, payload: error.message });
    }
}
export{
    getforumbtcity,
    postforum,
    getforumbyID,
    GetUserLikeForum,
    PostUserLikeForum,
    PutLikeForum,
    getforumbyName
}