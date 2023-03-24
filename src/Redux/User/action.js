import * as types from "./actiontypes"
import axios from "axios"

export const getuserreq=()=>{
    return{type: types.GET_USER_REQUEST}
}
export const getusersucc=(payload)=>{
    return{type: types.GET_USER_SUCCESS,payload}
}
export const getuserfail=()=>{
    return{type: types.GET_USER_ERROR}
}

export const getUserDetails= async (dispatch) =>{

    dispatch(getuserreq())
    return await axios.get(`http://localhost:5550/users/641d5b0af383b010e8296e5d`)
    .then((r)=>{
        dispatch(getusersucc(r.data))
    })
    .catch((e)=>{
        dispatch(getuserfail())
    })
}