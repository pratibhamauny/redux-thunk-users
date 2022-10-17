import {actionTypes} from '../constants/action-types'

const initialState={
    isLoading:false,
    data:[],
    error:''
}
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SHOW_USERS:
            return state
        case actionTypes.ADD_USER_STARTED:
            return{
                ...state,isLoading:true
            }
        
        case actionTypes.ADD_USER_SUCCESS:
            console.log("reducer..",action.payload)
            return{
                ...state,
                loading:false,
                data:[...state.data,action.payload],
                error:''
            }
        case actionTypes.ADD_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.error
            }
        default:
            return state
    }
}