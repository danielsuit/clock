import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date(), 
  month = months[d.getMonth()],
  date = d.getDate(),
  year = d.getFullYear(),
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
      <div className="Time">
        <h1 >{hours}:{minutes}</h1>
      </div>
      
      <div className="Date">
        <p>{month}, {date} {year}</p>
      </div>
      
    </div>
  )
}

export default App
