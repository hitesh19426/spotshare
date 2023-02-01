import React from 'react'
import { useParams } from 'react-router-dom'

import "./UpdatePlace.css";

export default function UpdatePlace(props) {
  const {pid} = useParams();
  const {getPlace} = props.getPlace();

  

  return (
    <div>UpdatePlace {pid}</div>
  )
}
