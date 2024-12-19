import {Outlet} from 'react-router-dom'
import Header from '../components/shared/header/Header'
import Footer from '../components/shared/footer/footer'


const WrapperComponent = () => {
  return (
  <>
<Header/>
<Outlet/>
<Footer/>
  </>
  )
}

export default WrapperComponent
