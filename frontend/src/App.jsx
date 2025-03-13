import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Navbar from "./components/shared/Navbar";
import { Toaster } from "sonner";
import { Button } from "./components/ui/button";
import { Provider } from "react-redux";
import store from "./redux/store";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  // for admin, starts here
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        path: "companies",
        element: <Companies />,
      },
      {
        path: "company/create",
        element: <CompanyCreate />,
      },
      {
        path: "jobs",
        element: <AdminJobs />,
      },
      {
        path: "company/update/:id",
        element: <CompanySetup />,
      },
      {
        path: "job/create",
        element: <PostJob />,
      },
      {
        path: "jobs/:id/applicants",
        element: <Applicants />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
