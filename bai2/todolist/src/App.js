import Description from "./Task/Task";
import {useState} from 'react';

function App() {
  const info = [
    {
        title: "Clean up bedroom",
    },
    {
        title: "Buy some milk",
    },
    {
        title: "Jogging",
    },
    {
        title: "Learn React",
    },
    {
        title: "Doing Exercises",
    }
  ];
  const [state,setState] = useState(info);
  const [length,setLength] = useState(info.length);
  const Task = ()=>{
    return (
        <ul>
            {
                state.map((iter,index)=>{
                    return <Description key = {index} props = {iter} />
                })
            }
        </ul>
    )
  }
  const handleClick = ()=>{
    const input = document.getElementById("addInput");
    if(input.value==="CLEAR"){
      setState([]);
      setLength(0);
    }
    else if(input.value !== ""){
      setState([...state,{
        title: input.value
      }])
      setLength(length+1);
    }
    else{
      alert ("Invalid Input");
    }
    input.value = '';
  }
  const handleKeyPress = (event)=>{
    if(event.key==="Enter"){
      event.preventDefault();
      document.getElementById("btn").click();
    }
  };
  return (
    <div className="App">
        <input 
          id = "addInput"
          className = "addInput" 
          placeholder="Enter your task here ..."
          onKeyDown={handleKeyPress}
        ></input>
        <button id="btn" onClick={handleClick}>Enter</button>
        <Task />
        <p>{length} tasks left</p>
    </div>
  );
}

export default App;
