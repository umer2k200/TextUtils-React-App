import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
//import About from './components/About';
import Alert from './components/Alert'
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
//All the work here is displayed on root div in index.html
function App() {
  const [mode,setMode] = useState('light');
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [btnTextColor, setBtnTextColor] = useState("dark")
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setBtnText("Enable Light Mode")
      setBtnTextColor("light")
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    }
    else{
      setMode('light')
      setBtnText("Enable Dark Mode")
      setBtnTextColor("dark")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About" mode={mode} btnText={btnText} btnTextColor={btnTextColor} toggleMode={toggleMode} />
        <Alert alertText={alert}/>
        <div className="container">
          {/* <Routes>
            <Route path="/" element={<TextForm heading="Enter your address" showAlert={showAlert}/>}/>
            <Route path="/about" element={<About mode={mode} textcolor={btnTextColor} toggleMode={toggleMode} />}/>
          </Routes> */}
          <TextForm heading="Enter your address" showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
