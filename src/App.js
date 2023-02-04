import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useCallback, useState } from "react";

import Users from "./pages/Users/Users";
import Layout from "./pages/Layout";
import MyPlaces from "./pages/Places/Places";
import Login from "./pages/Users/Login";
import NewPlace from "./pages/Places/NewPlace";
import UpdatePlace from "./pages/Places/UpdatePlace";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Users/Signup";
import { USERS, PLACES } from "./DUMMY_DATA";
import { AuthContext } from "./components/Users/AuthContext";

function getPlaces(uid) {
  // TODO: When you make apis, then you would not need USERS, so you would be able to extract out getPlaces into services
  const user = USERS.find((user) => user["id"] === uid);
  return user === undefined ? null : user["places"];
}
function getPlace(pid) {
  const place = PLACES[pid];
  return place === undefined ? null : place;
}

function App() {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback(async (values) => {
    console.log(values);
    console.log("logging user ....");
    
    setUserId("u1");
    setIsLoggedIn(true);
  }, []);

  const signup = useCallback(async (values) => {
    console.log(values);
    console.log("signing up user ....");
    await login(values);
  }, [login]);

  const logout = useCallback(async (values) => {
    console.log(values);
    console.log("logging out ...");
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogedIn: isLogedIn,
        userId: userId,
        login: login,
        logout: logout,
        signup: signup,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
              <Route index element={<Users users={USERS} />} />
              <Route
                path="/:uid/places"
                element={<MyPlaces getPlaces={getPlaces} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {isLogedIn && <Route path="/places/new" element={<NewPlace />} />}
              {isLogedIn && <Route
                path="/places/:pid"
                element={<UpdatePlace getPlace={getPlace} />}
              />}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
