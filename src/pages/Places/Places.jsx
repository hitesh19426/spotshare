import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import './Places.css'

function MyModal(props) {
  console.log("props = ", props);
  
  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteModalLabel"> Delete Modal </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this place?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger" onClick={() => console.log('clicked')}>Delete</button>
            {/* <button type="button" className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function Place(props) {
  
  function handleDelete(id){
    console.log('delete function clicked for place: ', id);
    //TODO: Check how this is going to update my main list of places
  }

  return <div>
    <div className="container-sm mt-5" style={{ 'maxWidth': '700px' }}>
      <div className="card mb-1 mt-3 col-md-8 ">
        <img src={`${props.place.imageUrl}`} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
          <h4 className="card-title"> {props.place.title} </h4>
          <h5 className="card-title"> {props.place.address} </h5>
          <p className="card-text"> {props.place.description} </p>
          <div className="navbar">
            <button type="button" className="btn btn-success me-auto" onClick={() => console.log('Clicked view on map button')}>
              View on Map
            </button>

            {/* <MyModal name="example" title="Map Modal" description="I do not have a crediit card to set this up. Sorry :') " /> */}

            <Link className="btn btn-success me-2" to={`/places/${props.place.id}`}> Edit </Link>
            <button type="button" className="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever={props.place.id}>
              Delete
            </button>

            <MyModal handleDelete={handleDelete} id={props.place.id}/>

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
    const places = getPlaces(uid);
    setPlaces(places);
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
      {places.map(place => <Place key={place.id} place={place} />)}
    </div>
  )
}
