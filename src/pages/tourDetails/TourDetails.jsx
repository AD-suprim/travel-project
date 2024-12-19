import React from 'react';
import { Link } from 'react-router-dom';

import "./tourDetails.css"

const destination= [
  { name: 'Chitwan National Park', image: './src/assets/tourpckage/chitwan.jpeg',description:"A UNESCO World Heritage Site known for its diverse wildlife, including Bengal tigers, one-horned rhinos, and elephants.", },
  { name: 'Lumbini', image: './src/assets/tourpckage/lumbini.jpeg',  description:"The birthplace of Lord Buddha and a UNESCO World Heritage Site",},
  { name: 'Sagarmatha National Park', image: './src/assets/tourpckage/everest.jpeg', description:'Home to Mount Everest, the highest peak in the world Trekking routes like the Everest Base Camp Trek and Gokyo Lakes Trek attract adventurers.', },
  { name: 'Annapurna Base Camp', image: './src/assets/tourpckage/abc.jpeg', description:"Annapurna Circuit and Annapurna Base Camp treks are popular among trekkers.",},
  { name: 'Bandipur', image: './src/assets/tourpckage/bandipur.jpeg', description:"A beautifully preserved hilltop town with traditional Newari culture and panoramic Himalayan views.", },
  { name: 'Rara Lake', image: './src/assets/tourpckage/rara.jpeg', description:"The largest lake in Nepal, located in the remote Mugu district. Known for its serene beauty and pristine surroundings.", },
  { name: 'Langtang Valley', image: './src/assets/tourpckage/langtang.jpeg', description:"A trekker's paradise, Langtang offers breathtaking views of glaciers, peaks, and diverse flora and fauna.", },
  { name: 'Mustang (Upper Mustang)', image: './src/assets/tourpckage/mustang.jpeg',  description:"Known as the Forbidden Kingdom,it offers a unique blend of Tibetan culture and arid landscapes.",},
  { name: 'Gosaikunda', image: './src/assets/tourpckage/gosaikunda.jpeg', description:"A sacred alpine lake located at an altitude of 4,380 meters, revered by both Hindus and Buddhists.", },
  { name: ' Ilam', image: './src/assets/tourpckage/ilam.jpeg', description:"nown for its lush green tea gardens, rolling hills, and serene environment.Perfect for those seeking a peaceful retreat amidst nature.", },
  { name: 'Manaslu Circuit Trek', image: './src/assets/tourpckage/manaslu.jpeg', description:"Manaslu Circuit Trek, showcasing breathtaking mountain scenery and diverse cultures.", },
  { name: 'Dudhkunda Glacier', image: './src/assets/tourpckage/dudhkunda.jpeg',description:"Dudhkunda is a hidden gem located in the Solukhumbu district of Nepal. Its name translates to Milky Lake, derived from its appearance and religious significance. This pristine glacial lake lies at an altitude of about 4,560 meters at the base of the Numbur Himal", },
  { name: ' Kathmandu Valley', image: './src/assets/tourpckage/kathmandu.jpeg', description:"Kathmandu, the capital city of Nepal, is a vibrant blend of ancient traditions and modernity. Often referred to as the City of Temples, it is the cultural and historical heart of the country.", },
  { name: 'Pokhara', image: './src/assets/tourpckage/pokhara.jpeg',description: 'Adventure activities: Paragliding, zip-lining, and ultralight flights.'
, },
  { name: 'Khaptad National Park', image: './src/assets/tourpckage/khaptad.jpeg',description:"A remote and pristine park in western Nepal with rolling meadows, dense forests, and religious significance as the home of Khaptad Baba.",  },
  { name: 'Panch Pokhari', image: './src/assets/tourpckage/pachpokhari.jpeg', 
    description:"A group of five sacred lakes in the Sindhupalchowk district, offering an off-the-beaten-path trekking experience.",
  },
];

const TourDetails = () => {
  return (
    <>
    <div className='main-container'>
      <section className="tours" id="tours">
        <div className="heading">
          { <span>
            <b>
              <i>Book a package according to your choice</i>
            </b>
          </span> }
         
            <p>
              <b>
                “Ready to hit the road? Whether it's a weekend getaway, business trip, or daily commute, we
                have got the perfect car for you! With flexible rentals, affordable rates, and a wide range
                of vehicles, your next adventure is just a drive away. Rent today and experience the freedom
                of the open road—on your terms!”
              </b>
            </p>
          
        </div>

        {/* Car container */}
        <div className="tours-container container">
          {destination.map(({ name, image, description }, index) => (
            <div className="box" key={index}>
              <Link to="/tour_details" state={{name, imageUrl: image, description}}>
                <img src={image} alt={name} />
              </Link>
              <p>{description}</p>
              <h2>
                <b>{name}</b>
              </h2>
              {/* <Link to={link} className="btn">
                Book Now
              </Link> */}
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default TourDetails;