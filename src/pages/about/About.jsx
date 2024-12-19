import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
    <div className=' main-container'>

       <div className="box1">
         <h2><b>About Us</b></h2>
     </div>
     <div className="box-container">
     <div className="box2">
        <img src="./src/assets/about/aboutusbg.jpg"/>
     </div>
     <div className="about-container">

       <div className="box3">
         <h3><b> 1. Mission and Vision </b></h3>

            <p>At XYZ Rental Company, our mission is to provide accessible, affordable, and sustainable transportation solutions for all. We envision a future where mobility is simple and convenient, empowering customers to travel freely without compromising on quality or safety. Our values—trust, innovation, and customer-centricity—guide every aspect of our service, ensuring we meet the evolving needs of our clients.</p>
            </div>
            
     <div className="box4">
         <h3><b> 2. History and Background </b></h3>
            
         <p> Founded in [year], XYZ Rental Company began as a small startup with a vision to revolutionize the rental industry. What started with a modest fleet has grown into a comprehensive service provider, offering a wide range of cars and bikes. Our journey is fueled by a commitment to innovation and a deep understanding of customer needs, earning us a reputation for reliability and excellence.</p>
     </div>
      <div className="box5">
         <h3><b> 3. Services and Fleet Information </b></h3>
            
         <p>XYZ Rental Company offers a diverse fleet of vehicles, including compact cars, luxury sedans, SUVs, and a variety of bikes to suit every preference. Whether you need a vehicle for a weekend getaway or a long-term rental, we have flexible options to meet your needs. Our fleet is regularly maintained to ensure safety and performance, giving customers peace of mind on every trip.</p>
      
         </div>
         <div className="box6">
             
            <h3><b> 4. Commitment to Customer Satisfaction and Safety </b></h3>
            
            <p>Customer satisfaction and safety are our top priorities at XYZ Rental Company. We adhere to stringent maintenance schedules and safety checks for all our vehicles. Our team is dedicated to providing exceptional service, with 24/7 support and roadside assistance. We value customer feedback and continuously improve our offerings to deliver a seamless and enjoyable rental experience.</p>
         </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About
