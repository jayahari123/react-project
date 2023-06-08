import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExploreMars from './Components/Explore';
import reportWebVitals from './reportWebVitals';
import AboutUs from './Components/Aboutus';
import BookingForm from './Components/Booking';
import TestMars from './Components/Tesr';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ExploreMars",
    element: <ExploreMars/>,
  },
  {
    path: "/About",
    element: <AboutUs/>,
  },
  {
    path: "/Book",
    element: <BookingForm/>,
  },
  {
    path: "/tet",
    element: <TestMars/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
