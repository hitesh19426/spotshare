import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import React from "react";
import Home from "./pages/Home";
import Places from "./pages/Places/Places";
import Authenticate from "./pages/Users/Auth";
import NewPlace from "./pages/Places/NewPlace";
import UpdatePlace from "./pages/Places/UpdatePlace";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Users />} />
        <Route path="/:uid/places" element={<Places />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:pid" element={<UpdatePlace />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />

    // alternative way
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
    //       <Route errorElement={<ErrorPage />}>
    //         <Route index element={<Users />} />
    //         <Route path="/:uid/places" element={<Places />} />
    //         <Route path="/auth" element={<Authenticate />} />
    //         <Route path="/places/new" element={<NewPlace />} />
    //         <Route path="/places/:pid" element={<UpdatePlace />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
