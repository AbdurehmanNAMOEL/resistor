import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/load.css'
let count =10
const LoadingPage = ({setLoading}) => {

    const [width,setWidth]=useState(10)
    const navigate = useNavigate()
    useEffect(()=>{
        if(width<300){
            setWidth(count+=0.1)
        }else{
            setLoading(false)
            navigate('/')
        }
    },[width,navigate,setLoading])

 
  return (
    <div className='load-container'>
        <h1>Resistor is Loading....</h1>
        <div className="loading">
            <div style={{width:`${width}px`}} className="loading-anime"></div>
        </div>
    </div>
  )
}

export default LoadingPage