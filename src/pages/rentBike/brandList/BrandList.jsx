import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import shineImage from '../assets/honda_shine/shine.jpg'; // Adjust the path as necessary
import './brandList.css'; // Ensure you have corresponding CSS

const BrandList = () => {
    const location = useLocation();
    const bikes = location.state;
  return (
    <div className='main-container'>
    <section className="honda" id="bikee">
      <div className="heading">
        <span>
          <b>Which bike are you interested in?</b>
        </span>
        <br />
      </div>
      <div className="honda-container container">
      
{
    bikes.map(({name, imageUrl})=>(
        <div className="box"  key={name}>
        {/* Use Link for internal navigation */}
        <Link to="/bike_details" state={{name, imageUrl}}>
          <img src={imageUrl} alt="Honda Shine" />
        </Link>
        <h2>
          <b>{name}</b>
        </h2>
      </div>
    ))
}
        {/* Add more bike boxes here as needed */}
      </div>
    </section>
    </div>
  );
};

export default BrandList;
