import { Outlet } from "react-router-dom"
import Nav from '../Nav'
import Footer from '../Footer'
import '../App.css'


const root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default root