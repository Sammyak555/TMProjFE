import * as types from "./actiontypes"

const initialState = {
    Allprojects: [],
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
        default: return state
    }
}

