import React from 'react'
import { Link } from 'react-router-dom'

function User(props) {
  return (
    <div className="container-sm mt-5" style={{ 'maxWidth': '500px' }}>
      <div className="card mb-1 mt-3 col-md-8 ">
        <img src={`${props.image}`} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
          <p className="card-text"> Here is some description for the user. </p>
          <Link className="btn btn-success" to={`/${props.uid}/places`}> Places Count: {props.placeCount} </Link>
        </div>
      </div>
    </div>
  )
}

export default function Users(props) {
  // TODO: Show this as a message/alert in the center of the screen.
  if (props.users.length === 0) {
    return <div className="d-flex align-items-center">
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">No user exists!!</h4>
        <p>What are you doing here when no users exists. Go, login and add some places if you want list here.</p>
      </div>
    </div>
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mx-5">
      {
        props.users.map(user => <User key={user.id} uid={user.id} name={user.name} image={user.image} placeCount={user.placeCount} />)
      }
    </div>
  )
}
