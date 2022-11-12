import "./App.css";
import { SampleText } from "./Component/SampleText";
import { CountText } from "./Component/CountText";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(()=>{
    var scrollElement = document.body;
    scrollElement.addEventListener('wheel', (event)=>{
      if (checkScrollDirectionIsUp(event)) {
        setIsVisible(true);
      } 
      else {
        setIsVisible(false);
      }
    })
  });
  const handleClick = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setIsVisible(false);
  }
  return (
    <div className="App">
      <div className = 'header' style={{display: isVisible ? 'block':'none'}}>
        <button onClick = {handleClick}><FontAwesomeIcon style={{fontSize: '60px', position: 'sticky'}} icon={faCircleUp} /></button>
      </div>
      <CountText />
      <div className = "text">
        <SampleText />
      </div>
    </div>
  );
}

export default App;
