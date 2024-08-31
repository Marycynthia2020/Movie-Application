import React from 'react'
import { trending } from '../data'
import ScrollableComponent from './ScrollableComponent'

const Trending = () => {
  return (
    <div>
        <ScrollableComponent data ={trending}/>
    </div>
  )
}

export default Trending