import React from 'react';
import { Link } from 'react-router-dom';

import "./carList.css"

const cars = [
  { name: 'Maruti Suzuki', image: './src/assets/rentCar/brand/car/maruti_suzuki.webp', },
  { name: 'Hyundai', image: './src/assets/rentCar/brand/car/hundai.jpg', },
  { name: 'Toyota', image: './src/assets/rentCar/brand/car/toyota.jpg', },
  { name: 'Mahindra', image: './src/assets/rentCar/brand/car/mahindra.jpg', },
  { name: 'Tata Motors', image: './src/assets/rentCar/brand/car/tata.jpg', },
  { name: 'Kia', image: './src/assets/rentCar/brand/car/kia.jpg', },
  { name: 'Honda', image: './src/assets/rentCar/brand/car/honda.jpg', },
  { name: 'Ford', image: './src/assets/rentCar/brand/car/ford.jpg', },
];

const CarList = () => {
  return (
    <>
    <div className='main-container'>
      <section className="Car-For-Rent" id="car">
        <div className="heading">
          {/* <span>
            <b>
              <i>Rent a car according to your choice</i>
            </b>
          </span> */}
          {/* <pre>
            <p>
              <b>
                “Ready to hit the road? Whether it's a weekend getaway, business trip, or daily commute, we
                have got the perfect car for you! With flexible rentals, affordable rates, and a wide range
                of vehicles, your next adventure is just a drive away. Rent today and experience the freedom
                of the open road—on your terms!”
              </b>
            </p>
          </pre> */}
        </div>

        {/* Car container */}
        <div className="cars-container container">
          {cars.map(({ name, image, link }, index) => (
            <div className="box" key={index}>
              <Link to="/car_details" state={{name, imageUrl: image}}>
                <img src={image} alt={name} />
              </Link>
              <h2>
                <b>{name}</b>
              </h2>
              <Link to={link} className="btn">
                Rent Now
              </Link>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default CarList;
