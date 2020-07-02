import React from 'react'
function Fcomp (users){
    
   // console.log(users);
   // const {users} = users
    const usersList = users.map(user =>{
        return (
            <div>
               <p>name: {user.name}</p>
               <p>age : {user.age}</p> 
            </div>
        )
    })
    return(
        <div>
        {usersList}
        </div>
    )
}
export default Fcomp