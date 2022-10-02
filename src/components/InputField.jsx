import React from 'react'
import { useState } from 'react';
import { pattern } from '../verifier/patternVerifier';
import './styles/inputField.css'
const InputField = ({title,placeholder,error,setValue,value,name,id}) => {

const [isValid,setValid] = useState(false)
const [isEmpity,setEmpty] = useState()

const validate = (field,regex)=>{
      let inputValue = field.value
      if(!regex.test(inputValue)){
      if(inputValue !== ''){setEmpty(error)
      }else if(inputValue===''){setEmpty('input is required')}
      setValid(true)
   }else setValid(false)
  }
  
const handleInput =(e)=>{
    validate(e.target,pattern[e.target.attributes.name.value])
    setValue(e.target.value)
        
}
  return (
    <div className='input-field-container '>
        <label className='input-field-title'>{title}</label>
        <input 
        type='text' 
        placeholder={placeholder}
        onChange={handleInput}
        value={value}  
        name={name}
        id={id}
    />
        {isValid ? <label className='error'>{isEmpity}</label>:''}
    </div>
  )
}

export default InputField