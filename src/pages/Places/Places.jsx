import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import './Places.css'

function Place(props) {
  return <div>
    <div className="container-sm mt-5" style={{ 'maxWidth': '700px' }}>
      <div className="card mb-1 mt-3 col-md-8 ">
        <img src={`${props.imageUrl}`} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
          <h4 className="card-title"> {props.title} </h4>
          <h5 className="card-title"> {props.address} </h5>
          <p className="card-text"> {props.description} </p>
          <div class="navbar">
            <Link className="btn btn-success me-auto"> View on Map </Link>
            <Link className="btn btn-success me-2"> Edit </Link>
            <Link className="btn btn-success me-2"> Delete </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default function Places(props) {
  const {uid} = useParams();
  const [places, setPlaces] = useState(null);

  // TOCHECK: Why [props, uid] is used -> what is does?
  useEffect(() => {
    const resp = props.getPlaces(uid);
    console.log(resp);
    setPlaces(resp);
  }, [props, uid]);


  // TODO: Show this as a message/alert in the center of the screen.
  if (places === null) {
    return <div className="d-flex align-items-center">
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">User Error!!</h4>
        <p>The user for which you are trying to locate places doesn't exist. Please do not break my system by trying access unknown user and do something else.</p>
      </div>
    </div>
  }

  
  // TODO: Show this as a message/alert in the center of the screen.
  if (places.length === 0) {
    return <div className="d-flex align-items-center">
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">No places exists!!</h4>
        <p>What are you doing here when no place exists. Go and checkout some other users or create one yourself if you are the user.</p>
      </div>
    </div>
  }

  return (
    <div class="row row-cols-1 row-cols-md-1 g-4 mx-5">
      {places.map(place => <Place title={place.title} description={place.description} address={place.address} location={place.location} imageUrl={place.imageUrl} />)}
    </div>
  )
}
