import React, { useCallback, useContext } from 'react'
import {Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Users/AuthContext'

function NavBar() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = useCallback(async () => {
        await authContext.logout();
        navigate("/")
    }, [])

    return (
        // TODO: Fix the navbar toggler button
        <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SpotShare</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* TODO: Add coloring for active link and so on. */}
                        {<NavLink className="nav-link active" aria-current="page" to="/"> Users </NavLink>}
                        {!authContext.isLogedIn && <NavLink className="nav-link active" aria-current="page" to="/login"> Login </NavLink>}
                        {authContext.isLogedIn && <NavLink className="nav-link active" aria-current="page" to="/places/new"> Create Place </NavLink>}
                        {authContext.isLogedIn && <NavLink className="nav-link active" aria-current="page" to={`/${authContext.userId}/places`}> My Places </NavLink>}
                        {/* <NavLink className="nav-link active" aria-current="page" to="/places/p1"> Edit Place </NavLink> */}
                        {authContext.isLogedIn && <div className="nav-link active" aria-current="page" onClick={logout}> Logout </div>}
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
            <Outlet />
        </div>
    )
}
