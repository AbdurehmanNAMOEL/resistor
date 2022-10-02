import React, {useState } from 'react'
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
  const [sixBand,setSixBand]=useState('black')
  const [resistanceValue,setResistanceValue]=useState('')
  const [toleranceValue,setToleranceValue]=useState('')
 
 const handleResistorColorCode=()=>{
     setSixBand(handleToleranceEncoding(toleranceValue))
     setFirstBand(Colors[handleResistanceCoefficient(resistanceValue).charAt(0)])
     setSecondBand(Colors[handleResistanceCoefficient(resistanceValue).charAt(1)])
     if(resistanceValue.length>=3){
     setThirdBand(Colors[handleResistanceCoefficient(resistanceValue).length-3])
     }

 }

 
 return (
   
    <div className='big-container'>
       
      <div className='resistor-component-container'>
       <Resistor 
        firstBand={firstBand} 
        secondBand={secondBand}
        thirdBand={thirdBand}
        sixBand={sixBand}
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
     
      <button onClick={handleResistorColorCode} className='submit-btn-fourBand'>Calculate</button>
    </div>
  )
}

export default ValueToColor