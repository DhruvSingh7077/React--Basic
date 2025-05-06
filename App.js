
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
 import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","sucess");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","sucess");
      document.title = 'TextUtils - Light Mode';
    }
    }
  
  return (

    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
<div className="container my-3">
  <Router>
<Routes>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            
  <TextForm  showAlert={showAlert} heading="Enter the text here" mode={mode}/> 
          </Route>
  </Routes>

  </Router>
  </div>

    
     </>
  );
}

export default App;
