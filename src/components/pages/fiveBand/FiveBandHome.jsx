import React from 'react'
import '../../styles/sixbandhome.css'
import FiveBandResistor from './FiveBandResistor'

import ValueToColor from './ValueToColor'
const FiveBandHome = () => {
  return (
    <div className='six-band-home-container'>
        <FiveBandResistor/>
        <ValueToColor/>
    </div>
  )
}

export default FiveBandHome