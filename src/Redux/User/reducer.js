import * as types from "./actiontypes"

const initialState={
    userDetails:{},
    isLoading:false,
    isError:false
}

export const userReducer = ( state = initialState, action ) => {
    const { type, payload } = action
    switch(type){
        case types.GET_USER_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.GET_USER_SUCCESS:{
            return {...state,isLoading:false,userDetails:payload}
        }
        case types.GET_USER_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        default : return state
    }
}

