import axios from "axios"
import { actionTypes } from "../constants/action-types"

export const showUsers=()=>{
    return{
        type:"SHOW_USERS"
    }
}
const addUserStarted=()=>{
    return{
        type:actionTypes.ADD_USER_STARTED
    }
}

const addUserSuccess=(resData)=>{
    console.log("response data---",resData)
    return{
        type:actionTypes.ADD_USER_SUCCESS,
        payload:resData
    }
}
const addUserFailure=(error)=>{
    return{
        type:actionTypes.ADD_USER_FAILURE,
        payload:{error}
    }
}
export const addUser=(data)=>{
    console.log("addUser called...")
    return (dispatch,getState)=>{
      //  console.log(dispatch)
        dispatch(addUserStarted())
      //  console.log(getState())
      console.log(data)
        axios
        .post(`https://jsonplaceholder.typicode.com/users`,data)
        .then(response=>{
            dispatch(addUserSuccess(response.data))
        })
        .catch(error=>{
            dispatch(addUserFailure(error.message))
        })
    }
}