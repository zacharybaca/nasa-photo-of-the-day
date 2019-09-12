import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [dailyPicture, setDailyPicture] = useState([])
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
      const dailyPicture = response.data
      setDailyPicture(dailyPicture);
      console.log(dailyPicture);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])
  return (
    <div className="App">
      <div>
        {dailyPicture.map(image => {
          return <App key={image} />
        })}
      </div>
    </div>
  );
}

export default App;
