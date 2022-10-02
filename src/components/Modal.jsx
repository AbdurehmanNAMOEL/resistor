import React from 'react'
import './styles/modal.css'
const Modal = ({image,title,setClose}) => {
  return (
    <div className='modal-container'>
    <div className="inner-content">
        <header>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="close">
                <div onClick={()=>setClose(false)} className="closed">X</div>
            </div>
        </header>
        <div className='horizontal'/>
        <div className="image-container">
            <img src={image} alt="" className='image' />
        </div>
    </div>
    </div>
  )
}

export default Modal