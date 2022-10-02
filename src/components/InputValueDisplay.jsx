import React from 'react'
import './styles/resistorValue.css'
const InputValueDisplay = ({inputValue,band}) => {
  return (
    <div className={`input-value-container-${band}`}>
      
      <div className="total-resistance-value">
        {`ResistanceValue : ${inputValue.totalValue}`}
      </div>

      <div className="max-value">
        {`Max-Value : ${inputValue.maxValue}`}
      </div>

      <div className="min-value">
         {`MainValue : ${inputValue.minValue}`}
      </div>

      <div className="tolerance">
        {`toleranceValue : ${inputValue.tolerance}`}
      </div>

    </div>
  )
}

export default InputValueDisplay