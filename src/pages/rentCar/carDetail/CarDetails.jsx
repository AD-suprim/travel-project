import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './carDetails.css'; 

const CarDetails = () => {
    const location = useLocation();
    const car = location.state;

    return (
        <div className='main-container'>
            <div>
            <section className="maruti container" id="maruti">
                <div className="maruti-img">
                    <img src={car.imageUrl} alt={car.name} />
                    <h2>
                        <b>{car.name}<br /></b>
                    </h2>
                </div>
                <div className="maruti-text">
                    <h2>
                        Looking for a reliable, fuel-efficient, and comfortable car to navigate Nepal's roads?
                    </h2>
                    <p>
                        {/* <b>{car.description}</b> */}
                    </p>
                </div>
            </section>
            <section className="rent" id="rent">
                <div className="rent-text">
                    <Link to="/rent_now" state={{ name: car.name }}>
                        <button className="btn">Rent Now</button>
                    </Link>
                </div>
            </section>
            </div>
        </div>
    );
};

export default CarDetails;
