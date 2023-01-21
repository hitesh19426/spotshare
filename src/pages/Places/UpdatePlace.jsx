import React from 'react'
import { useParams } from 'react-router-dom'

import "./UpdatePlace.css";

export default function UpdatePlace() {
  const {pid} = useParams();

  return (
    <div>UpdatePlace {pid}</div>
  )
}
