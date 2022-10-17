import React,{useState} from 'react'
import{addUser}from '../action/index'
import {connect} from 'react-redux'
import {v4}from 'uuid'
const AddUser = (props) => {
    const[user,setUser]=useState({
        id:'',
        name:'',
        age:'',
        email:''
    })
    const changeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({...user,[name]:value})
    }
   // console.log(user)
   const submitHandler=(e)=>{
    e.preventDefault()
    props.onAddUser(user)
    setUser({
        name:'',
        age:'',
        email:''
    })
   }
  return (
    <div>
        <h2>User Registration</h2>
        <form onSubmit={submitHandler}>
            <p><input type="text" name="name" placeholder='Enter name...' value={user.name} onChange={(e)=>changeHandler(e)}/></p>
            <p><input type="text" name="age" placeholder='Enter age...' value={user.age} onChange={(e)=>changeHandler(e)}/></p>
            <p><input type="text" name="email" placeholder='Enter email...' value={user.email} onChange={(e)=>changeHandler(e)}/></p>
            <p><button>Add User</button></p>
        </form>
       
    </div>
  )
}
const mapStateToDispatch=dispatch=>{
    return{
        onAddUser:(newUser)=>dispatch(addUser(newUser))
    }
}
export default connect(null,mapStateToDispatch)(AddUser)
