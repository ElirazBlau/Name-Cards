import './style.css'

export default function UserCard({user}) {
  const {firstName, lastName, image, address, phoneNumber, age} = user
    return (
       <div class="card">
     
        <span>
       <img src={image} alt="" /></span>
       <h2>{firstName} {lastName}</h2>
       <p>Address: {address}</p>
       <p>Phone: {phoneNumber}</p>
       <p>Age: {age}</p>
       </div>
    )
}