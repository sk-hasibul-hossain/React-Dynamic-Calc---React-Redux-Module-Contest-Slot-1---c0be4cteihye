import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div id="main">
      <input
        id="input1"
        onChange={(e) => {
          const num = parseInt(e.target.value);
          if (num) {
            setNum1(num);
          } else {
            setNum1(0);
          }
        }}
      />
      +
      <input
        id="input2"
        onChange={(e) => {
          const num = parseInt(e.target.value);
          if (num) {
            setNum2(num);
          } else {
            setNum2(0);
          }
        }}
      />
      <p id="result">{num1 + num2}</p>
    </div>
  );
}


export default App;
