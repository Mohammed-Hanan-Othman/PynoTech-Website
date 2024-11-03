import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/Banner'
import Title from '../../components/title/title'


const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <div>
          <Title title='Services' />

        </div>
        {/* <Banner/> */}
    </>
  )
}

export default Home