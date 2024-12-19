import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <header className=" mb-50">
        <div className="nav container ">
          {/* <i className="bx bx-menu" id="menu-icon"></i> */}

          <a href="#" className="logo">
            your logo{" "}
          </a>
          <ul className="navbar">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/rent_bike">Bike For Rent</a>
            </li>
            <li>
              <a href="/rent_car">Car For Rent</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/tour_list">Our Travel Package</a>
            </li>
            <li>
              <a href="/admin">Login as Admin</a>
            </li>
          </ul>

          {/* <i className='bx bx-search' id="search-icon"></i>
     <div className="search-box container">
        <input type="search" name="" id="" placeholder="search here ... "/>
     </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
