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
import {USERS} from "./DUMMY_DATA"

function App() {

  function getPlaces(uid){
    const user = USERS.find(user => user["id"] === uid);
    if(user === undefined)
      return null;
    return user["places"];
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Users users={USERS}/>} />
            <Route path="/:uid/places" element={<Places getPlaces={getPlaces} />} />
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
