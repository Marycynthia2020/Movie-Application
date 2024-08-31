import React from 'react'
import GridMovies from './GridMovies'
import { latest } from '../data'

const Latest = () => {
  return (
    <div>
        <GridMovies data ={latest}  name="Latest Movies"/>
    </div>
  )
}

export default Latest