import React from 'react'
import HomeData from './HomeData'
import Trending from './Trending'
import Upcoming from './Upcoming'
import Latest from './Latest'
import Recommended from './Recommended'


const Home = () => {
  return (
    <div>
      <HomeData />
      <Upcoming />
      <Latest />
      <Trending />
      <Recommended />
      
      
    </div>
  )
}

export default Home