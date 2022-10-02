import React, { useState } from 'react'
import InputValueDisplay from '../../InputValueDisplay'
import Resistor from '../../Resistor'
import SelectorInputField from '../../SelectorInputField'
import '../../styles/resistorcontainer.css'
import { 
getValueFromColor, 
handleMaxValue, 
handleMinValue, 
handlePower, 
handleTempCofDecoding, 
handleToleranceValue
} from '../../utils/genericValue'

const SixBandResistor = () => {
  const [firstBand,setFirstBand]=useState('black')
  const [secondBand,setSecondBand]=useState('black')
  const [thirdBand,setThirdBand]=useState('black')
  const [fourthBand,setFourthBand]=useState('black')
  const [fifthBand,setFifthBand]=useState('black')
  const [sixBand,setSixBand]=useState('black')
 
 
  const handleTotalResistanceValue=()=>{ 
    
     return ((getValueFromColor(firstBand)*100+getValueFromColor(secondBand)
            *10+getValueFromColor(thirdBand))*handlePower(fourthBand))
  }

  let max=handleMaxValue(handleTotalResistanceValue(),fifthBand)
  let min=handleMinValue(handleTotalResistanceValue(),fifthBand)
  let tolerance = handleToleranceValue(fifthBand)
  
 const inputValue={
  totalValue:handleTotalResistanceValue(),
  maxValue:max,
  minValue:min,
  tolerance:fifthBand!=="black"?tolerance:'0'
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
  
  <div className="selectors-container">
        <SelectorInputField title={'FirstBand'} setValue={setFirstBand}/>
        <SelectorInputField title={'SecondBand'} setValue={setSecondBand}/>
        <SelectorInputField title={'ThirdBand'} setValue={setThirdBand}/>
        <SelectorInputField title={'Multiplayer'} setValue={setFourthBand} />
        <SelectorInputField title={'Tolerance'} setValue={setFifthBand}/>
        <SelectorInputField title={'TCM'} setValue={setSixBand}/>
  </div>
      
  <div className='value-display-for-sixBand'>
        <InputValueDisplay band={'sixBand'} inputValue={inputValue}/>
  </div>
    
  <div className='temp-cof'>
        <label htmlFor="#">{`TCM :  ${handleTempCofDecoding(sixBand)}`}</label>
  </div>

</div>
  )
}

export default SixBandResistor