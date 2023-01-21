import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <header> Users Page header </header>
        <nav>
            <ul>
                <li><Link to="/"> Home </Link> </li>
                <li><Link to="/auth"> Auth </Link> </li>
                <li><Link to="/places/new"> NewPlace </Link> </li>
                <li><Link to="/u1/places"> Places </Link> </li>
                <li><Link to="/places/p1"> Edit </Link> </li>
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}
