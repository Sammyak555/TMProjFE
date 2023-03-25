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

export const getalluserreq=()=>{
    return{type: types.GET_ALLUSER_REQUEST}
}
export const getallusersucc=(payload)=>{
    return{type: types.GET_ALLUSER_SUCCESS,payload}
}
export const getalluserfail=()=>{
    return{type: types.GET_ALLUSER_ERROR}
}

export const getUserDetails= async (dispatch) =>{

    dispatch(getuserreq())
    return await axios.get(`https://tame-newt-garment.cyclic.app/users/641d5b0af383b010e8296e5d`)
    .then((r)=>{
        dispatch(getusersucc(r.data))
    })
    .catch((e)=>{
        dispatch(getuserfail())
    })
}

export const getallUserDetails= async (dispatch) =>{

    dispatch(getalluserreq())
    return await axios.get(`https://tame-newt-garment.cyclic.app/users/`)
    .then((r)=>{
        dispatch(getallusersucc(r.data))
    })
    .catch((e)=>{
        dispatch(getalluserfail())
    })
}