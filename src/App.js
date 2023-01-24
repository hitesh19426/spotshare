import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import React from "react";
import Layout from "./pages/Layout";
import Places from "./pages/Places/Places";
import Authenticate from "./pages/Users/Auth";
import NewPlace from "./pages/Places/NewPlace";
import UpdatePlace from "./pages/Places/UpdatePlace";
import ErrorPage from "./pages/ErrorPage";

const USERS = [
  {id: 'u1', name: 'User 1', image: 'https://i.pravatar.cc/150?img=32', placeCount: 2},
  {id: 'u2', name: 'User 2', image: 'https://i.pravatar.cc/150?img=2', placeCount: 4},
  {id: 'u3', name: 'User 3', image: 'https://i.pravatar.cc/150?img=11', placeCount: 3},
  {id: 'u4', name: 'User 4', image: 'https://i.pravatar.cc/150?img=4', placeCount: 1},
  {id: 'u5', name: 'User 5', image: 'https://i.pravatar.cc/150?img=16', placeCount: 0},
  {id: 'u6', name: 'User 6', image: 'https://i.pravatar.cc/150?img=37', placeCount: 0},
]

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Users users={USERS}/>} />
            <Route path="/:uid/places" element={<Places />} />
            <Route path="/auth" element={<Authenticate />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/places/:pid" element={<UpdatePlace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
