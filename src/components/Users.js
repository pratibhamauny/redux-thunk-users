import React from 'react'
import {connect} from 'react-redux'
const Users = (props) => {
    //console.log(props.users[0].name)
    const usersList=props.users.map(user=>{
        return <p key={user.id}>{user.name}</p>
    })
  return (
    <div>
        <h1>User List</h1>
        {usersList}
    </div>
  )
}
const mapStateToProps=state=>{
    return{
        users:state.users.data
    }
}
export default connect(mapStateToProps)(Users)
