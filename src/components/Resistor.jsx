import React from 'react'
import './styles/resistor.css'
const Resistor = (
  {firstBand,secondBand,thirdBand,fourthBand,
  fifthBand,sixBand, isSixBand,isFiveBand,
  background
}) => {
  return (
    <div className='resistor-container'>
      <div className="left-container">
        <div className="left-wire"></div>
        <div  style={{background:`${background}`}} className="left-circle">
            <div style={{background:`${firstBand}`}} className="first-band"></div>
        </div>
      </div>
      <div  style={{background:`${background}`}} className="middle-container">
        <div style={{background:`${secondBand}`}} className="second-band"></div>
        <div style={{background:`${thirdBand}`}} className="third-band"></div>
       { isFiveBand||isSixBand?<div style={{background:`${fourthBand}`}} className="fourth-band"></div>
        :''
      }
       {isSixBand ? <div  style={{background:`${fifthBand}`}} className="five-band"></div>:''}
      </div>
      <div className="right-container">
        <div  style={{background:`${background}`}} className="right-circle">
            <div style={{background:`${sixBand}`}} className="six-band"></div>
        </div>
        <div className="right-wire"></div>
      </div>
    </div>
  )
}

export default Resistor