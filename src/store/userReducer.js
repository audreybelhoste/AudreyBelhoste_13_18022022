export const initialState = {
    token : null,
    user : null,
}

export const SET_TOKEN = 'SET_TOKEN'
export const SET_USER = 'SET_USER'
export const REMOVE_USER_AND_TOKEN = 'REMOVE_USER_AND_TOKEN'
export const EDIT_USER = 'EDIT_USER'

export function userReducer (state = initialState, action) {
    switch(action.type){
        case SET_TOKEN:
            return {...state, token: action.payload}
        case SET_USER: 
            return {...state, user: action.payload}
        case REMOVE_USER_AND_TOKEN: 
            return {...state, token: null, user: null}
        case EDIT_USER: 
            return {...state, user: action.payload}
        default: 
            return state
    }
}