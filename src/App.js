import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import React from "react";
import Layout from "./pages/Home";
import Places from "./pages/Places/Places";
import Authenticate from "./pages/Users/Auth";
import NewPlace from "./pages/Places/NewPlace";
import UpdatePlace from "./pages/Places/UpdatePlace";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    // <RouterProvider router={router} />

    // alternative way
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Users />} />
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
