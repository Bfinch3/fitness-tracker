import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Import fontawesome (for icons)
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Import custom styling
import './index.css'

import App from './App.jsx';
import Homepage from './pages/homepage';
import MemberPage from './pages/memberpage';
import ErrorPage from './pages/ErrorPage';
import WorkoutPage from './pages/WorkoutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      }, 
      {
        path: '/memberpage',
        element: <MemberPage />
      },
      {
        path: '/workout',
        element: <WorkoutPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
