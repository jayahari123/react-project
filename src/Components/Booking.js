import React from 'react';
import './booking.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class BookingForm extends React.Component {
  render() {
    return (
      <div className="booking">
        <div className="logo">
          <a href="index.html">
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEin2Af7lmQbntSMxSgk4pL1qPjp_7iBFFXkJNUSTo1MYQs-Xx3cUPifHHKcoT_km0C8Puja9Tqj8-Ncx5rAwXJ5JWE5jTjFtnyKN4RYV-nlf78se3MMi7ead2Kf5EHW2N3NEqN1hI9DM5awBkMp5h0a_xoXzXF1FOwzxpptEIuOlUiqXg4oKAl_1o8" height="80px" width="80px" alt="logo" />
          </a>
        </div>
        <div className="cointainer">
          <h1>Book Ticket</h1><br /><br />
          <div className="form">
            <form>
              <label className="name">First Name :</label>
              <input className="inpt" type="text" placeholder="FirstName" /><br /><br />
              <label className="name">Last Name :</label>
              <input className="inpt" type="text" placeholder="LastName" /><br /><br />
              <label className="name">Email Address :</label>
              <input className="inpt" type="email" placeholder="Email Address" /><br /><br />
              <label className="name">Date to Travel</label><br /><br />
              <label className="name">From :</label>
              <input className="inpt" type="date" placeholder="FirstName" /><br /><br />
              <label className="name">To :</label>
              <input className="inpt" type="date" placeholder="FirstName" /><br /><br />
              <label className="name">Medical Certificate No.</label>
              <input className="inpt" type="number" placeholder="Medical Certificate No." /><br /><br />
              <label className="name">Have you passed Astro training?</label>
              <input className="inpt" type="radio" name="radio" /><label>Yes</label>
              <input className="inpt" type="radio" name="radio" /><label>No</label><br /><br />
            </form>
            <a className="aa" href="#">Book Now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingForm;
