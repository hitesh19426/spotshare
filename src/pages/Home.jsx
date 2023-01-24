import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-light" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SpotShare</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link active" aria-current="page" to="/"> Users </NavLink>
                        <NavLink className="nav-link active" aria-current="page" to="/auth"> Auth </NavLink>
                        <NavLink className="nav-link active" aria-current="page" to="/places/new"> Create Place </NavLink>
                        <NavLink className="nav-link active" aria-current="page" to="/u1/places"> Places </NavLink>
                        <NavLink className="nav-link active" aria-current="page" to="/places/p1"> Edit Place </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default function Home() {
    return (
        <div>
            <NavBar />

            {/* <nav>
                <ul>
                    <li><Link to="/"> Home </Link> </li>
                    <li><Link to="/auth"> Auth </Link> </li>
                    <li><Link to="/places/new"> NewPlace </Link> </li>
                    <li><Link to="/u1/places"> Places </Link> </li>
                    <li><Link to="/places/p1"> Edit </Link> </li>
                </ul>
            </nav> */}

            <Outlet />
        </div>
    )
}
