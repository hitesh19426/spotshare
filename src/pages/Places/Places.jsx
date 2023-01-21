import React from 'react'
import { useParams } from 'react-router-dom'

import './Places.css'

export default function Places() {
  const {uid} = useParams();

  return (
    <div>Places for the User {uid} </div>
  )
}
