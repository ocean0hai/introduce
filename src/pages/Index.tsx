import Header from '@/components/Header'
import CarouselImg from '@/components/common/CarouselImg'
import {Outlet} from 'react-router-dom'
import Footer from '@/components/Footer'

export default function Index() {

  return (
    <div>
      <div className=' mx-auto ' >
        <Header />
        <CarouselImg />
        <Outlet />
        <Footer /> 
      </div>
    </div>
  )
}
