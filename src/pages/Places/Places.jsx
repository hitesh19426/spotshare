import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import './Places.css'

function MyModal(props) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Sorry but I dont have a credit card to set it up.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Place(props) {
  return <div>
    <div className="container-sm mt-5" style={{ 'maxWidth': '700px' }}>
      <div className="card mb-1 mt-3 col-md-8 ">
        <img src={`${props.imageUrl}`} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
          <h4 className="card-title"> {props.title} </h4>
          <h5 className="card-title"> {props.address} </h5>
          <p className="card-text"> {props.description} </p>
          <div className="navbar">
            <button type="button" className="btn btn-success me-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
              View on Map
            </button>

            <MyModal />

            {/* <Link className="btn btn-success me-auto"> View on Map </Link> */}
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
  const {getPlaces} = props;
  const [places, setPlaces] = useState(null);

  // TOCHECK: Why [props, uid] is used -> what is does?
  useEffect(() => {
    const resp = getPlaces(uid);
    // console.log(resp);
    setPlaces(resp);
  }, [getPlaces, uid]);


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
    <div className="row row-cols-1 row-cols-md-1 g-4 mx-5">
      {places.map(place => <Place key={place.id} title={place.title} description={place.description} address={place.address} location={place.location} imageUrl={place.imageUrl} />)}
    </div>
  )
}
