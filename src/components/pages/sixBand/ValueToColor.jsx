import React, { useEffect, useState } from 'react'
import InputField from '../../InputField'
import Resistor from '../../Resistor'
import '../../styles/resistorcontainer.css'
import { 
    Colors, 
    handleResistanceCoefficient, 
    handleTempCofEncoding, 
    handleToleranceEncoding 
} from '../../utils/genericValue'

const ValueToColor = () => {
  const [firstBand,setFirstBand]=useState('black')
  const [secondBand,setSecondBand]=useState('black')
  const [thirdBand,setThirdBand]=useState('black')
  const [fourthBand,setFourthBand]=useState('black')
  const [fifthBand,setFifthBand]=useState('black')
  const [sixBand,setSixBand]=useState('black')
  const [resistanceValue,setResistanceValue]=useState('')
  const [toleranceValue,setToleranceValue]=useState('')
  const [temCoefficient,setTemCoefficient]=useState('')
  const [isItFourBand,setFourBand]=useState(true)
 
  console.log(Colors[handleResistanceCoefficient(resistanceValue).charAt(0)])
 const handleResistorColorCode=()=>{
     setFifthBand(handleToleranceEncoding(toleranceValue))
     setSixBand(handleTempCofEncoding(temCoefficient))
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
      fifthBand={fifthBand}
      sixBand={sixBand}
      isFiveBand={true}
      isSixBand={true}
      background={'rgb(12, 197, 243)'}
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

       <InputField 
       title={'Temperature coefficient Value (ppm/K)'}
       placeholder={'Enter Temperature coefficient value'}
       name={'tempCoefficient'}
       error={'valid temperature coefficient value is required'}
       value={temCoefficient}
       setValue={setTemCoefficient}
       />
      </div>
     
      <button onClick={handleResistorColorCode} className='submit-btn-sixBand'>Calculate</button>
    </div>
  )
}

export default ValueToColor