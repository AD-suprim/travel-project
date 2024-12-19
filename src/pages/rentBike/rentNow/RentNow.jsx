import React from 'react';
import './rentNow.css';
import { useLocation } from 'react-router-dom';

const RentNow = () => {
    const location = useLocation()
    const bike = location.state;
  return (
    <div className='main-container'>
    <div className="rent-container">
      <form action="" className="rent-left">
        <div className="rent-left-title">
          <h2>Rent Now</h2>
          <hr />
        </div>

        {/* Pre-filled bike name */}
        <input
          type="text"
          name="bikeName"
          defaultValue={bike.name}
          className="rent-inputs"
          readOnly
          required
        />

        {/* User input fields */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="rent-inputs"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Number"
          className="rent-inputs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="rent-inputs"
          required
        />
        <input
          type="text"
          name="drivingLicenseNumber"
          placeholder="Your Driving License Number"
          className="rent-inputs"
          required
        />
        <input
          type="text"
          name="rentalDuration"
          placeholder="Renting Period"
          className="rent-inputs"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="rent-submit-btn">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default RentNow;
