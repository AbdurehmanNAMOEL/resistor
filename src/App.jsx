

import './App.css';
import FiveBandHome from './components/pages/fiveBand/FiveBandHome';
import FiveBandResistor from './components/pages/fiveBand/FiveBandResistor';
import FourBandHome from './components/pages/fourBand/FourBandHome';
import SixBandHome from './components/pages/sixBand/SixBandHome';
import FourBand from './images/fourBandManual.jpg'
import FiveBand from './images/fiveBandManual.jpg'
import sixBand from './images/sixBandManual.jpg'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';



function App() {
  const [title,setTitle]=useState('FourBand Resistor')
  const [image,setImage]=useState(FourBand)
  const [IsClosed,setClose]=useState('')
  const [IsPageLoading,setLoading]=useState(true)
 
 

  return (
    <div className="App">
    
    {IsClosed?<Modal title={title} image={image} setClose={setClose}/>:''}
    <Router>
    
       {IsPageLoading?<LoadingPage setLoading={setLoading}/>:''}
         <NavBar setTitle={setTitle} setImage={setImage} setClose={setClose}/>
      <Routes>
        
        <Route path={'/'} element={<FourBandHome/>}/>
        <Route path={'/fiveBand'} element={<FiveBandHome/>}/>
        <Route path={'/sixBand'} element={<SixBandHome/>}/>
      </Routes>
    </Router>
      </div>
      
 
  );
}

export default App;
