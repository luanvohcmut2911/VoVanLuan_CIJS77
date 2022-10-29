import './App.css';
import { useState } from 'react';


function App() {
  
  const [state, setState] = useState(1);
  const handleChange = ()=>{
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    if(state===3) setState(1);
    else setState(state+1);
    if(state===1) {
      green.style.backgroundColor = "white";
      red.style.backgroundColor = "red";
    }
    else if(state=== 2) {
      yellow.style.backgroundColor = "yellow";
      red.style.backgroundColor = "white";
    }
    else{
      yellow.style.backgroundColor = "white";
      green.style.backgroundColor = "green";
    }
  }
  return (
    <div className="App">
      <button onClick={handleChange} >Next</button>
      <div className = 'light' style = {{display: "flex", justifyContent:"space-around" }} >
        <div id='red' style={{ width: "100px", height: "100px", backgroundColor: "white", borderRadius: "50%", borderStyle: "solid"  }}/>
        <div id='yellow' style={{ width: "100px", height: "100px", backgroundColor: "white", borderRadius: "50%", borderStyle: "solid"  }}/>
        <div id='green' style={{ width: "100px", height: "100px", backgroundColor: "white", borderRadius: "50%", borderStyle: "solid"  }}/>
      </div>
    </div>
  );
}

export default App;
