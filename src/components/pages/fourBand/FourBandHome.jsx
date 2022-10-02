import React from 'react'
import '../../styles/sixbandhome.css'
import FourBandResistor from './FourBandResistor'
import ValueToColor from './ValueToColor'
const FourBandHome = () => {
  return (
    <div className='six-band-home-container'>
       <FourBandResistor/>
        <ValueToColor/>
    </div>
  )
}

export default FourBandHome