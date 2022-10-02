import React from 'react'
import '../../styles/sixbandhome.css'
import SixBandResistor from './SixBandResistor'
import ValueToColor from './ValueToColor'
const SixBandHome = () => {
  return (
    <div className='six-band-home-container'>
        <SixBandResistor/>
        <ValueToColor/>
    </div>
  )
}

export default SixBandHome