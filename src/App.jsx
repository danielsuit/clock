import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    var d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes();
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date(),
  hours = d.getHours(),
  minutes = d.getMinutes();
  if(minutes < 10){
    minutes = "0"+minutes;
  }
  if(hours < 10){
    hours = "0"+hours;
  }
  return (
    <div className="App">
        <div className="Clock"><span> {hours}</span><p className="colon">:</p><span>{minutes}</span></div>
    </div>
  )
}

export default App

