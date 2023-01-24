import React from 'react'
import { Link } from 'react-router-dom'
import "./Users.css"

function User(props) {
  return (
    <div class="container-sm mt-5" style={{ 'max-width': '500px' }}>
      <div class="card mb-1 mt-3 col-md-8 ">
        <img src={`${props.image}`} class="img-fluid rounded-start" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> {props.name} </h5>
          <p class="card-text"> Here is some description for the user. </p>
          <Link class="btn btn-success" to={`/${props.uid}/places`}> Places Count: {props.placeCount} </Link>
        </div>
      </div>
    </div>
  )
}

export default function Users(props) {
  if (props.users.length === 0) {
    return <div class="d-flex align-items-center">
      <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">No user exists!!</h4>
        <p>What are you doing here when no users exists. Go, login and add some places if you want list here.</p>
      </div>
    </div>
  }

  return (
    <div class="row row-cols-1 row-cols-md-2 g-4 mx-5">
      {
        props.users.map(user => <User uid={user.id} name={user.name} image={user.image} placeCount={user.placeCount} />)
      }
    </div>
  )
}
