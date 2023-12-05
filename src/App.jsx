import React from 'react'
import users from './users.json'
import UserCard from './components/UserCard'


export default function App() {
  return (
    <div class="container">
         <h1>Users</h1>
     <ul>
  
      {users.map (user => 
      <UserCard key={user.id} user ={user} />)}
     </ul>
      </div>
  )
}
