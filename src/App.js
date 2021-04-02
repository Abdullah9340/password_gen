import "./App.css";
import React, { useRef } from "react";
function App() {
  let length = 50;
  let capital = true;
  let lowercase = true;
  let symbol = true;
  let number = true;
  const password =
    "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@#$%^&*()";
  const passwordRef = useRef();
  const passwordLength = useRef();

  function generatePassword() {
    let generated = "";
    let options = "";
    if(capital){
      options += password.substring(password.indexOf("A"), password.indexOf("Z") + 1);
    }
    if(lowercase){
      options += password.substring(password.indexOf("a"), password.indexOf("z") + 1);
    }
    if(number){
      options += password.substring(password.indexOf("0"), password.indexOf("9") + 1);
    }
    if(symbol){
      options += password.substring(password.indexOf("!"));
    }
    for (let i = 0; i < length; i++) {
      generated += options.charAt(Math.random() * options.length);
    }
    passwordRef.current.value = generated;
  }

  function setLength() {
    document.getElementById("numberOfChar").innerHTML =
      passwordLength.current.value;
    length = passwordLength.current.value;
  }

  function changeCapital(){
    capital = !capital;
  }
  function changeNumber(){
    number = !number;
  }
  function changeSymbol(){
    symbol = !symbol;
  }
  function changeLower(){
    lowercase = !lowercase;
  }
  return (
    <>
      <div className="card">
        <header className="main-header">Password Generator</header>
        <div className="slider">
          <p id="numberOfChar">50</p>
          <input onChange={setLength} ref={passwordLength} type="range" min="1" max="50" id="passwordLengthSlider"/>
        </div>
        <div className="slider">
          <input type="checkbox" onChange = {changeCapital} defaultChecked = {true}/> 
          <p>Captials</p>
          <input type = "checkbox" onChange = {changeNumber} defaultChecked = {true}/>
          <p>Numbers</p>
          <input type = "checkbox" onChange = {changeSymbol} defaultChecked = {true}/>
          <p>Symbols</p>
          <input type = "checkbox" onChange = {changeLower} defaultChecked = {true}/>
          <p>Lowercase</p>
        </div>
        <textarea ref={passwordRef} name="" id="" cols="5" rows="5" value="" readOnly={true}></textarea>
        <button onClick={generatePassword}>Generate Password</button>
      </div>  
    </>
  );
}

export default App;
