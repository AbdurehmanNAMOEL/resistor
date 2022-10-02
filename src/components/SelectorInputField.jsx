import React from 'react'
import './styles/selector.css'
import { Colors } from './utils/genericValue'
const SelectorInputField = ({setValue,title}) => {

   
  return (
    <div className='selector-container'>
      <label htmlFor="#">{title}</label>
    <select onChange={(e)=>setValue(e.target.value)} className='color-selector'>
        {Colors.map(item=>
        <option style={{background:`${item}`}} value={item}>{item}</option>
        )}
    </select>
    </div>
  )
}

export default SelectorInputField