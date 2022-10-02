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
handleToleranceValue
} from '../../utils/genericValue'

const FiveBandResistor = () => {
  const [firstBand,setFirstBand]=useState('black')
  const [secondBand,setSecondBand]=useState('black')
  const [thirdBand,setThirdBand]=useState('black')
  const [fourthBand,setFourthBand]=useState('black')
  const [sixBand,setSixBand]=useState('black')
 

  const handleTotalResistanceValue=()=>{ 
    
     return ((getValueFromColor(firstBand)*100+getValueFromColor(secondBand)
            *10+getValueFromColor(thirdBand))*handlePower(fourthBand))
  }
  
   let max = handleMaxValue(handleTotalResistanceValue(),sixBand)
   let min = handleMinValue(handleTotalResistanceValue(),sixBand)
   let tolerance = handleToleranceValue(sixBand)

 const inputValue={
  totalValue:handleTotalResistanceValue(),
  maxValue:max,
  minValue:min,
  tolerance:sixBand!=="black"?tolerance:'0'
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
      <div className="selectors-container">
        <SelectorInputField title={'FirstBand'} setValue={setFirstBand}/>
        <SelectorInputField title={'SecondBand'} setValue={setSecondBand}/>
        <SelectorInputField title={'ThirdBand'} setValue={setThirdBand}/>
        <SelectorInputField title={'Multiplayer'} setValue={setFourthBand} />
        <SelectorInputField title={'Tolerance'} setValue={setSixBand}/>
      </div>
      <div className='value-display-for-fiveBand'>
        <InputValueDisplay band={'fiveBand'} inputValue={inputValue}/>
      </div>
    </div>
  )
}

export default FiveBandResistor