import React, { useState, useEffect } from 'react';
import './App.css';
import me from './assets/me.PNG'
import guitar from './assets/guitar.JPG'
import god from './assets/god.JPG'
import face from './assets/face.JPG'
const imgArr = [guitar, god, me, face];
function App() {
  const [img, changeImg] = useState(face)
  
  useEffect(() => {    
    const timer = setInterval(() => { imageChanger()  }, 20000);
    return () => clearInterval(timer)
  });
  function imageChanger() {
    //intentionally potentially OOB to display the alt text sometimes
   let ranNum = Math.floor(Math.random() * imgArr.length);
   changeImg(imgArr[ranNum]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="the man himself" />
        <p>
          things:
        </p>
        <ul>
        <li>
          <a
          className="App-link"
          href="https://the-ambler.bandcamp.com/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newest Mus
        </a>
          </li>
        <li>
          <a
          className="App-link"
          href="https://www.youtube.com/user/Dwexen/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          youtube
        </a>
          </li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
