import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import FourBandManual from '../images/fourBandManual.jpg'
import FiveBandManual from '../images/fiveBandManual.jpg'
import SixBandManual from '../images/sixBandManual.jpg'
export const NavBar = ({setTitle,setImage,setClose}) => {

  const handleFourBandManual=()=>{
        setTitle('FourBand Resistor')
        setImage(FourBandManual)
    } 
  
    const handleFiveBandManual=()=>{
        setTitle('FiveBand Resistor')
        setImage(FiveBandManual)
    }
     const handleSixBandManual=()=>{
        setTitle('SixBand Resistor')
        setImage(SixBandManual)
    }
  return (
     <header>
        <ul>
          <li onClick={handleFourBandManual}><Link className='link' to={'/'}>FourBand</Link> </li>
          <li onClick={handleFiveBandManual}><Link className='link' to={'/fiveBand'}>FiveBand</Link> </li>
          <li onClick={handleSixBandManual}><Link className='link' to={'/sixBand'}>SixBand</Link> </li>
          <li onClick={()=>setClose(true)} >Manual</li>
        </ul>
      </header>
  )
}
