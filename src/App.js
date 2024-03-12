import React, { useState } from 'react';
import './App.css';

function App() {

  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMessage,setErrorMessage]=useState("");

  const calculateBmi=()=>{
    const isValidheight =/^\d+$/.test(height);
    const isValidWeight =/^\d+$/.test(weight)
      if(isValidheight && isValidWeight){
          const heightInMeter=height/100;
          const BmiValue=weight/(heightInMeter * heightInMeter);
          setBmi(BmiValue.toFixed(2));
          if(BmiValue <18.5){
            setBmiStatus("Under Weight")
          }else if(BmiValue >=18.5 && BmiValue<24.9){
            setBmiStatus("Normal Weight")
          }else if(BmiValue >=25 && BmiValue <29.9){
            setBmiStatus("Over Weight")
          }else{
            setBmiStatus("Obese")
          }
          setErrorMessage("")
      }else{
        setBmi(null);
        setBmiStatus("");
        setErrorMessage("Please enter valid numeric values for height and weight");
      }   
  }

  const clearAll=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  }

  return (
     <div className='bmi-container'>
      <div className='box'>
        <img src='./image/bmi.jpg' alt='img' style={{height:"350px", alignItems:"center",marginTop:"80px"}}/>
      </div>
        <div className='data'>
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <div className='input-container'>
            <label htmlFor='height' >Height (cm) :</label>
            <input type='text'value={height} id='height' onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className='input-container'>
            <label htmlFor='weight' >Weight (kg) :</label>
            <input type='text' id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI </button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
          <div className='result'>
            <p>Your BMI is :{bmi}</p>
            <p>Status :{bmiStatus}</p>z
          </div>
          )}
        </div>
    </div>
  );
}

export default App;
