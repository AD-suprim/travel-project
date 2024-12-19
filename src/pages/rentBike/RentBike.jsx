import React from 'react'
import "./rentBike.css"
import { Link } from 'react-router-dom'

const RentBike = () => {
    return (
     <>
  <div className='main-container'>
      <div>
              <section className="bike-for-rent">
                  <div className="heading">
                      {/* <span>
                          <b>
                              <i>Rent a bike according to your choice</i>
                          </b>
                      </span> */}
                      {/* <p>
                          <b>
                              “Ready to hit the road? Whether it's a weekend getaway, business trip, or daily commute, we've got the
                              perfect bike for you! With flexible rentals, affordable rates, and a wide range of vehicles, your next
                              adventure is just a drive away. Rent today and experience the freedom of the open road—on your terms!”
                          </b>
                      </p> */}
                  </div>
                  <div className="bikes-container container mt-20" id="bike">
                     {
                       bikes.map(({brandName, imageUrl, bikes})=>(
                          <div className="box">
                          <Link to="/bike_list" state = {bikes}>
                          <img src={imageUrl} alt=""/>
                          </Link>
                          <h2><b>{brandName}</b></h2>
                      </div>
                      ))
                     }
                  </div>
              </section>
          </div>
        </div>
     </>
    )
  }

const bikes = [
    {
        brandName: "Honda",
        imageUrl: "./src/assets/rentBike/brands/bikes/hondab.jpg",
        bikes: [
            {
                name: "Honda Shine",
                imageUrl: "./src/assets/rentBike/brands/honda/shine.jpg",
            },
            {
                name: "Honda CBR250",
                imageUrl: "./src/assets/rentBike/brands/honda/cbr.jpg",
            },
            {
                name: "Hornet H'ness CB350",
                imageUrl: "./src/assets/rentBike/brands/honda/hness.jpg",
            },
            {
                name: "Hornet Hornet",
                imageUrl: "./src/assets/rentBike/brands/honda/hornet.jpg",
            },
            {
                name: "Honda Unicorn",
                imageUrl: "./src/assets/rentBike/brands/honda/unicorn.jpg",
            },
            {
                name: "Honda dio",
                imageUrl: "./src/assets/rentBike/brands/honda/dio.jpg",
            },
            {
                name: "Honda Xblade",
                imageUrl: "./src/assets/rentBike/brands/honda/xblade.jpg",
            },
            {
                name: "Honda XR150",
                imageUrl: "./src/assets/rentBike/brands/honda/xr150.jpg",
            },
            // {
            //     name: "Honda Shine",
            //     imageUrl: "./src/assets/rentBike/brands/honda/sh.jpg",
            // }
        ]
    },
    {
        brandName: "Yamaha",
        imageUrl: "./src/assets/rentBike/brands/bikes/yamahab.jpg",
        bikes: [
            {
                name: "MT 15",
                imageUrl: "./src/assets/rentBike/brands/yamaha/mt15.jpg"
            },
            {
                name: "Yamaha v2",
                imageUrl: "./src/assets/rentBike/brands/yamaha/v2yamaha.jpg"
            },
             {
                name: "Yamaha v3",
                imageUrl: "./src/assets/rentBike/brands/yamaha/v3.jpg"
            },
            {
                name: "Yamaha Fz v3",
                imageUrl: "./src/assets/rentBike/brands/yamaha/yamahafzv3.jpg"
            }
        ]
    },
    {
        brandName: "Hero",
        imageUrl: "/src/assets/rentBike/brands/bikes/hero.jpg",
        bikes: [
            {
                name: "Hero Glamour",
                imageUrl: "./src/assets/rentBike/brands/hero/heroglamour.jpg"
            },  {
                name: "Hero Extreme",
                imageUrl: "./src/assets/rentBike/brands/hero/heroxtreme16or.jpg"
            }
        ]
    }
    ,
    {
        brandName: "TVS",
        imageUrl: "/src/assets/rentBike/brands/bikes/tvs.jpg",
        bikes: [
            {
              name: "NTorq 125",
              imageUrl: "/src/assets/rentBike/brands/tvs/ntorq125.jpg"  
            },
            {
                name: "Rider 125",
                imageUrl: "/src/assets/rentBike/brands/tvs/tvs125raider.jpg"  
              },
              {
                name: "Rtr 160",
                imageUrl: "/src/assets/rentBike/brands/tvs/rtr160.jpg"  
              },
              {
                name: "Rtr 200",
                imageUrl: "/src/assets/rentBike/brands/tvs/rtr200.jpg"  
              },
        ]
    },
    {
        brandName: "Beneli",
        imageUrl: "./src/assets/rentBike/brands/bikes/beneli.jpg",
        bikes: [
            {
            name: "Beneli Tnt 15",
            imageUrl: "./src/assets/rentBike/brands/beneli/benelitnt15.jpg"
            },
            {
                name: "Beneli TRK 251",
                imageUrl: "./src/assets/rentBike/brands/beneli/trk251.jpg"
                }
        ]
    },
    {
        brandName: "Ktm",
        imageUrl: "./src/assets/rentBike/brands/bikes/ktm.jpg",
        bikes: [
            {
                name: "Duke 200",
                imageUrl: "./src/assets/rentBike/brands/ktm/duke200.jpg"
            },
            {
                name: "Duke 250",
                imageUrl: "./src/assets/rentBike/brands/ktm/duke250.jpg"
            },
            {
                name: "RC 200",
                imageUrl: "./src/assets/rentBike/brands/ktm/rc200.jpg"
            },
            {
                name: "Ktm Adventure 250",
                imageUrl: "./src/assets/rentBike/brands/ktm/ktmadvanture250.jpg"
            }
        ]
    },
    {
        brandName: "CFMoto",
        imageUrl: "./src/assets/rentBike/brands/bikes/cfmoto.jpg",
        bikes: [
            {
                name: "CF Moto NK 150",
                imageUrl: "./src/assets/rentBike/brands/cfmoto/cfmotonk150.jpg"
            },
            {
                name: "CF Moto NK 200",
                imageUrl: "./src/assets/rentBike/brands/cfmoto/cfmotonk200.jpg"
            }
        ]
    },
    {
        brandName: "Crossfire",
        imageUrl: "./src/assets/rentBike/brands/bikes/crossfire.jpg",
        bikes: [
            {
                name: "GR 7",
                imageUrl: "./src/assets/rentBike/brands/crossfire/gr7.jpg"
            },
            {
                name: "HJ 250",
                imageUrl: "./src/assets/rentBike/brands/crossfire/hj250.png"
            },
            {
                name: "RM 250",
                imageUrl: "./src/assets/rentBike/brands/crossfire/rm250.jpg"
            },
            {
                name: "TRK 250",
                imageUrl: "./src/assets/rentBike/brands/crossfire/trk250.jpg"
            }
        ]
    },
    {
        brandName: "BMW",
        imageUrl: "./src/assets/rentBike/brands/bikes/bmwb.jpg",
        bikes: [
            {
                name: "BMW G310 GS",
                imageUrl: "./src/assets/rentBike/brands/bmw/bmwg310gs.jpg"
            },
            {
                name: "BMW G310 R",
                imageUrl: "./src/assets/rentBike/brands/bmw/bmwg310r.jpg"
            }
        ]
    },
    {
        brandName: "Royal Enfield",
        imageUrl: "./src/assets/rentBike/brands/bikes/royal.jpg",
        bikes: [
            {
                name: "Classic 350",
                imageUrl: "./src/assets/rentBike/brands/royalenfield/royal350.jpg"
            },
            {
                name: "Royal Hunter 350",
                imageUrl: "./src/assets/rentBike/brands/royalenfield/royalhunter350.jpg"
            },
            {
                name: "Royal Meteor 350",
                imageUrl: "./src/assets/rentBike/brands/royalenfield/royalmeteor350.jpg"
            },
            {
                name: "Scram 441",
                imageUrl: "./src/assets/rentBike/brands/royalenfield/scram441.png"
            }
        ]
    },
    {
        brandName: "Suzuki",
        imageUrl: "./src/assets/rentBike/brands/bikes/suzukib.jpg",
        bikes: [
            {
                name: "Gixxer 155",
                imageUrl: "./src/assets/rentBike/brands/suzuki/gixxer155.jpg"
            },
            {
                name: "Gixxer 250",
                imageUrl: "./src/assets/rentBike/brands/suzuki/gixxer250.jpg"
            }
        ]
    },
    {
        brandName: "Bajaj",
        imageUrl: "./src/assets/rentBike/brands/bikes/bajaj.jpg",
        bikes: [
            {
                name: "N160",
                imageUrl: "./src/assets/rentBike/brands/bajaj/n160.jpg"
            },
            {
                name: "NS200",
                imageUrl: "./src/assets/rentBike/brands/bajaj/ns200.jpg"
            },
            {
                name: "Platina 100",
                imageUrl: "./src/assets/rentBike/brands/bajaj/platina100.jpg"
            }
            ,
            {
                name: "Pulsar 150",
                imageUrl: "./src/assets/rentBike/brands/bajaj/pulsar150.jpg"
            }
        ]
    },

]

// const RentBike = () => {
//   return (
//    <>

//     <div>
//             <section className="bike-for-rent">
//                 <div className="heading">
//                     <span>
//                         <b>
//                             <i>Rent a bike according to your choice</i>
//                         </b>
//                     </span>
//                     <p>
//                         <b>
//                             “Ready to hit the road? Whether it's a weekend getaway, business trip, or daily commute, we've got the
//                             perfect bike for you! With flexible rentals, affordable rates, and a wide range of vehicles, your next
//                             adventure is just a drive away. Rent today and experience the freedom of the open road—on your terms!”
//                         </b>
//                     </p>
//                 </div>
//                 <div className="bikes-container container mt-20" id="bike">
//                    {
//                      bikes.map(({brandName, imageUrl, bikes})=>(
//                         <div className="box">
//                         <Link to="/bike_list" state = {bikes}>
//                         <img src={imageUrl} alt=""/>
//                         </Link>
//                         <h2><b>{brandName}</b></h2>
//                     </div>
//                     ))
//                    }
//                 </div>
//             </section>
//         </div>
//    </>
//   )
// }

export default RentBike
