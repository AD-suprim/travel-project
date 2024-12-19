import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './tourPackage.css'; 

const TourPackage = () => {
    const location = useLocation();
    const packages = location.state;

    return (
        <div className='main-container'>
            <section className="gosainkunda container" id="gosainkunda">
                <div className="gosaikunda">
                    <img src={packages.imageUrl} alt={packages.name} />
                    <h2>
                        <b>{packages.name}<br /></b>
                    </h2>
                   <p>{packages.description}</p> 
                 </div> 
                {/* <div className="g-text">
                    <h2>
                        Looking for a reliable, fuel-efficient, and comfortable car to navigate Nepal's roads?
                    </h2>
                    <p>
                        {/* <b>{car.description}</b> */}
                    {/* </p>
                </div> */} 
            </section>
            <section className="rent" id="rent">
                <div className="rent-text">
                    <Link to="/book_now" state={{ name: packages.name }}>
                        <button className="btn">book Now</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TourPackage;