import * as types from "./actiontypes"

const initialState = {
    Allprojects: [],
    Alltask:[],
    isLoading: false,
    isError: false
}

export const projectReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_PROJECT_REQUEST: {
            return { ...state, isLoading: true }
        }
        case types.GET_PROJECT_SUCCESS: {
            return { ...state, isLoading: false, Allprojects: payload }
        }
        case types.GET_PROJECT_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case types.ADD_PROJECT_REQUEST: {
            return { ...state, isLoading: true }
        }
        case types.ADD_PROJECT_SUCCESS: {
            return { ...state, isLoading: false, Allprojects: payload }
        }
        case types.ADD_PROJECT_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case types.DELETE_PROJECT_REQUEST: {
            return { ...state, isLoading: true }
        }
        case types.DELETE_PROJECT_SUCCESS: {
            return { ...state, isLoading: false, Allprojects: payload }
        }
        case types.DELETE_PROJECT_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case types.ADD_TASK_REQUEST: {
            return { ...state, isLoading: true }
        }
        case types.ADD_TASK_SUCCESS: {
            return { ...state, isLoading: false, Alltask: payload }
        }
        case types.ADD_TASK_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case types.UPDATE_TASK_REQUEST: {
            return { ...state, isLoading: true }
        }
        case types.UPDATE_TASK_SUCCESS: {
            return { ...state, isLoading: false, Alltask: payload }
        }
        case types.UPDATE_TASK_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        default: return state
    }
}

