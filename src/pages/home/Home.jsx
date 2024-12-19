import React from 'react'

import "./home.css"
import Header from '../../components/shared/header/Header';
import Footer from '../../components/shared/footer/footer';

const Home = () => {
  return (
  <div >
  
    {/* <Header/> */}
    <section className="home" id="home">
        <div className="home-text"> 
            <h1><span><b>Rent with confidence</b></span></h1>
            <p><b>Get exactly what you need, <div>when you need it.</div></b></p>
            <a href="/about" className="btn">Discover Now</a>
        </div>


    </section>
    
  </div>
  )
}

export default Home
