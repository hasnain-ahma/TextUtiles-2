import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('dark')
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setalert(null)
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='black';
      showAlert('Dark Mode is Enabled','Success');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode is Enabled','Success');
    }
  }
  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
   
     
    <Textform showAlert={showAlert} head='Enter Text Here' mode={mode} />
    <About />
  
   </>
  
  );
}

export default App;
