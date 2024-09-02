import React from 'react'
import HomeData from './HomeData'
import Trending from './Trending'
import Upcoming from './Upcoming'
import Latest from './Latest'
import Recommended from './Recommended'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
      <HomeData />
      <Upcoming />
      <Latest />
      <Trending />
      <Recommended />
      <Footer />
      
      
    </div>
  )
}

export default Home