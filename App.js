
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');// wether dark mode is enable or not
const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type 
  })
}
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
    }
  }
  return (

    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
<div className="container my-3">
  <TextForm heading="Enter the text here"/> 
 {/* <About/> */}
</div>
    
     </>
  );
}

export default App;
