import React from 'react'
import GridMovies from './GridMovies'
import { upcome } from '../data'

const Upcoming = () => {
  return (
    <div>
        <GridMovies data = {upcome} name="Upcomming Movies"/>
    </div>
  )
}

export default Upcoming