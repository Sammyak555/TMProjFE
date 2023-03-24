import axios from "axios"
import * as types from "./actiontypes"

export const getprojectreq=()=>{
    return{type: types.GET_PROJECT_REQUEST}
}
export const getprojectsucc=(payload)=>{
    return{type: types.GET_PROJECT_SUCCESS,payload}
}
export const getprojectfail=()=>{
    return{type: types.GET_PROJECT_ERROR}
}

export const addprojectreq=()=>{
    return{type: types.ADD_PROJECT_REQUEST}
}
export const addprojectsucc=(payload)=>{
    return{type: types.ADD_PROJECT_SUCCESS,payload}
}
export const addprojectfail=()=>{
    return{type: types.ADD_PROJECT_ERROR}
}
export const deleteprojectreq=()=>{
    return{type: types.DELETE_PROJECT_REQUEST}
}
export const deleteprojectsucc=(payload)=>{
    return{type: types.DELETE_PROJECT_SUCCESS,payload}
}
export const deleteprojectfail=()=>{
    return{type: types.DELETE_PROJECT_ERROR}
}

export const addtaskreq=()=>{
    return{type: types.ADD_TASK_REQUEST}
}
export const addtasksucc=(payload)=>{
    return{type: types.ADD_TASK_SUCCESS,payload}
}
export const addtaskfail=()=>{
    return{type: types.ADD_TASK_ERROR}
}






export const getproject=(data)=>async(dispatch)=>{
  dispatch({type:types.GET_PROJECT_REQUEST})
    if(data){
        console.log(data)
    
    return  axios.get(`http://localhost:5550/project/${data}`)
    .then((r)=>{
        dispatch(getprojectsucc(r.data.projectdata))
    })
    .catch((e)=>{
        dispatch(getprojectfail())
    })
}
}

export const AddingProject=(data,id)=>(dispatch)=>{
    dispatch(addprojectreq())
    if(data&&id){
       console.log(data,id)
    return axios.post(`http://localhost:5550/project/${id}`,data)
    .then((r)=>{
        dispatch(addprojectsucc(r.data))
    })
    .catch((e)=>{
        dispatch(addprojectfail())
    })
}
}

export const AddingTask=(userid,data)=>(dispatch)=>{
    dispatch(addtaskreq())
    if(userid,data){
       const payload ={
            taskName:data.issueDescription,
            AssignedTo:data.persontobeAssigned
        }
    return axios.post(`http://localhost:5550/task/${userid}/${data.project}`,payload)
    .then((r)=>{
        dispatch(addtasksucc(r.data))
    })
    .catch((e)=>{
        dispatch(addtaskfail())
    })
}
}