const initialState = {
    token : null,
    user : null,
}

export const SET_TOKEN = 'SET_TOKEN'
export const SET_USER = 'SET_USER'

export function userReducer (state = initialState, action) {
    switch(action.type){
        case SET_TOKEN:
            return {...state, token: action.payload}
        case SET_USER: 
            return {...state, user: action.payload}
        default: 
            return state
    }
}