import React from 'react'
import GridMovies from './GridMovies'
import { recommended } from '../data'

const Recommended = () => {
  return (
    <div>
        <GridMovies data={recommended} name="Recommended Movies" />
    </div>
  )
}

export default Recommended