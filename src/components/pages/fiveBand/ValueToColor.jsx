import React, { useEffect, useState } from 'react'
import InputField from '../../InputField'
import Resistor from '../../Resistor'
import '../../styles/resistorcontainer.css'
import { 
    Colors, 
    handleResistanceCoefficient, 
    handleToleranceEncoding 
} from '../../utils/genericValue'

const ValueToColor = () => {
  const [firstBand,setFirstBand]=useState('black')
  const [secondBand,setSecondBand]=useState('black')
  const [thirdBand,setThirdBand]=useState('black')
  const [fourthBand,setFourthBand]=useState('black')
  const [sixBand,setSixBand]=useState('black')
  const [resistanceValue,setResistanceValue]=useState('')
  const [toleranceValue,setToleranceValue]=useState('')
  const [temCoefficient,setTemCoefficient]=useState('')
  const [isItFourBand,setFourBand]=useState(true)
 
  console.log(Colors[handleResistanceCoefficient(resistanceValue).charAt(0)])
 const handleResistorColorCode=()=>{
     setSixBand(handleToleranceEncoding(toleranceValue))
     setFirstBand(Colors[handleResistanceCoefficient(resistanceValue).charAt(0)])
     setSecondBand(Colors[handleResistanceCoefficient(resistanceValue).charAt(1)])
     setThirdBand(Colors[handleResistanceCoefficient(resistanceValue).charAt(2)])
     if(resistanceValue.length>=3){
     setFourthBand(Colors[handleResistanceCoefficient(resistanceValue).length-3])
     }

 }
  
 return (
   
    <div className='big-container'>
       
      <div className='resistor-component-container'>
    <Resistor 
      firstBand={firstBand} 
      secondBand={secondBand}
      thirdBand={thirdBand}
      fourthBand={fourthBand}
      sixBand={sixBand}
      isFiveBand={true}
      background={'rgb(140, 8, 180)'}
    />
      </div>
      <div className="input-container">
       
       <InputField 
       title={'Resistance Value (Ω)'}
       placeholder={'Enter Resistance value'}
       name={'input'}
       error={'valid Resistance value is required'}
       value={resistanceValue}
       setValue={setResistanceValue}
       />
       
       <InputField 
       title={'Tolerance Value'}
       placeholder={'Enter tolerance value'}
       name={'tolerance'}
       error={'valid tolerance value is required'}
        value={toleranceValue}
       setValue={setToleranceValue}
       />

      </div>
     
      <button onClick={handleResistorColorCode} className='submit-btn-fiveBand'>Calculate</button>
    </div>
  )
}

export default ValueToColor