import React  from 'react';
import { useLocation } from 'react-router-dom';
import './bikeDetails.css'; 
import { Link } from 'react-router-dom';

const BikeDetails = () => {
    const location = useLocation();
    const bike = location.state;
  return (
    <div className='main-container'>
      <section className="shine container" id="shine">
        <div className="shine-img">
          <img src={bike.imageUrl} alt="Honda Shine" />
          <h2>
            <b>{bike.name}</b>
          </h2>
        </div>
        <div className="shine-text">
          <h2>
            Looking for a reliable, fuel-efficient, and comfortable bike to navigate Nepal's roads?
          </h2>
          <p>
            The {bike.name} is affordable, fuel-efficient, and ideal for daily commuting. Known for smooth performance and low maintenance.
          </p>
        </div>
      </section>
      <section className="rent" id="rent">
        <div className="rent-text">
          <Link to="/rent_now" state={{name: bike.name}}>
          <button className=' btn'>Rent Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BikeDetails;
