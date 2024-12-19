import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import RentBike from "./pages/rentBike/RentBike";
import BrandList from "./pages/rentBike/brandList/BrandList";
import BikeDetails from "./pages/rentBike/bikeDetails/BikeDetails";
import RentNow from "./pages/rentBike/rentNow/RentNow";
import CarList from "./pages/rentCar/carList/CarList";
import CarDetails from "./pages/rentCar/carDetail/CarDetails";
import TourDetails from "./pages/tourDetails/TourDetails";
import TourPackage from "./pages/tourPackage/TourPackage";
// import BookNow from "./pages/bookNow/BookNow";
import WrapperComponent from "./utils/WrapperComponent";
import BookNow from "./pages/bookNow/BookNow";
import Admin from "./pages/adminLogin/Admin";

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <WrapperComponent/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/rent_bike",
        element: <RentBike/>
      },
      {
        path: "/bike_list",
        element: <BrandList/>
      },
      {
        path: "/bike_details",
        element: <BikeDetails/>
      },
      {
        path: "/rent_now",
        element: <RentNow/>
      },
      {
        path: "/rent_car",
        element: <CarList/>
      },
      {
        path: "/car_details",
        element: <CarDetails/>
      },
      {
        path: "/tour_details",
        element: <TourPackage/>
      },
      {
        path: "/tour_list",
        element: < TourDetails/>
      },
      {
        path: "/book_now",
        element: < BookNow/>
      },
      {
        path: "/admin",
        element: < Admin/>
      },
    ]
  },
{
  path: "*",
  element: <NotFound />,
}
]) 

  return (
    <RouterProvider router={router} /> 
  )
}

export default App
