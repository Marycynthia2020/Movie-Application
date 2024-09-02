import React from 'react'
import HomeData from '../Home/HomeData'
import Upcoming from '../Home/Upcoming'
import Latest from '../Home/Latest'
import Trending from '../Home/Trending'
import Recommended from '../Home/Recommended'

const Series = () => {

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

export default Series