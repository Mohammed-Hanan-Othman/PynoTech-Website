import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/services'
import More from '../../components/more/more'
import Credentials from '../../components/credentials/credentials'
import Clients from '../../components/clients/clients'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Services/>
        <More/>
        {/* <Credentials/> */}
        <Clients/>
        <Footer/>
    </>
  )
}

export default Home