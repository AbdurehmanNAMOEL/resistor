
const toleranceDecoder={
    "black":0,
    "brown":0.01,
    "red":0.03,
    "orange":0.04,
    "green":0.005,
    "blue":0.0025,
    "violet":0.001
}

const toleranceEncoder={
    "0":"black",
    "0.01":"brown",
    "0.03":"red",
    "0.04":"orange",
    "0.005":"green",
    "0.0025":"blue",
    "0.001":"violet",
    "0.02":"gold"
}

 const tempCofEnCode={
    "250":"black",
    "100":"brown",
    "50":"red",
    "15":"orange",
    "20":"green",
    "25":"yellow",
    "10":"blue",
    "5":"violet",
    "1":"gray"
}

const tempCof={
    "black":"250 ppm/K",
    "brown":"100 ppm/K",
    "red":"50 ppm/K",
    "orange":"15 ppm/K",
    "green":"20 ppm/K",
    "yellow":"25 ppm/K",
    "blue":"10 ppm/K",
    "violet":"5 ppm/K",
    "gray":"1 ppm/K"
}

export const Colors=[
 "black","brown",
 "red","orange",
 "yellow","green",
 "blue","violet",
 "gray","white"
]

export const getValueFromColor=(colorInput)=>{
    return Colors.indexOf(colorInput)
}


export const handleToleranceDecoding =(value)=>{
  if(value==="black") return toleranceDecoder.black
  else if(value==="brown") return toleranceDecoder.brown
  else if(value==="red") return toleranceDecoder.red
  else if(value==="orange") return toleranceDecoder.orange
  else if(value==="green") return toleranceDecoder.green
  else if(value==="blue") return toleranceDecoder.blue
  else if(value==="violet") return toleranceDecoder.violet
  else return 0.02
}

export const handleToleranceEncoding =(value)=>{
  if(value==="0") return toleranceEncoder[0]
  else if(value==="0.01") return toleranceEncoder["0.01"]
  else if(value==="0.03") return toleranceEncoder["0.03"]
  else if(value==="0.04") return toleranceEncoder["0.04"]
  else if(value==="0.005") return toleranceEncoder["0.005"]
  else if(value==="0.0025") return toleranceEncoder["0.0025"]
  else if(value==="0.001") return toleranceEncoder["0.001"]
  else return "gold"
}


 export const handlePower=(value)=>{
  return Math.pow(10,getValueFromColor(value))
 }



export const handleTempCofDecoding =(value)=>{
  if(value==="black") return tempCof.black
  else if(value==="brown") return tempCof.brown
  else if(value==="red") return tempCof.red
  else if(value==="orange") return tempCof.orange
  else if(value==="green") return tempCof.green
  else if(value==="blue") return tempCof.blue
  else if(value==="violet") return tempCof.violet
  else if(value==="gray") return tempCof.gray
  else return "0"
}


export const handleTempCofEncoding =(value)=>{
  if(value==="250") return tempCofEnCode[250]
  else if(value==="100") return tempCofEnCode[100]
  else if(value==="50") return tempCofEnCode[50]
  else if(value==="15") return tempCofEnCode[15]
  else if(value==="20") return tempCofEnCode[20]
  else if(value==="25") return tempCofEnCode[25]
  else if(value==="10") return tempCofEnCode[10]
  else if(value==="5") return tempCofEnCode[5]
  else if(value==="1") return tempCofEnCode[1]
  else return "gold"
}



export const handleResistanceCoefficient =(value)=>{
    if(value.includes("k"||"K")){
        return (parseInt(value.split('k'||'K')[0])*1000).toString()
    }else if(value.includes("M"||"m")){
        return(parseInt(value.split('M'||'m')[0])*1000000).toString()
    }else return value
}


 export const handleMaxValue=(totalResistanceValue,band)=>{
   return totalResistanceValue+(totalResistanceValue*handleToleranceDecoding(band))
}

 export const handleMinValue=(totalResistanceValue,band)=>{
    return totalResistanceValue-(totalResistanceValue*handleToleranceDecoding(band))
  }

export const handleToleranceValue=(band)=>{
   
    return (` ± ${handleToleranceDecoding(band)*100}%`)
  }