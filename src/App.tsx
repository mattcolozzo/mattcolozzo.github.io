import React, { useState, useEffect } from 'react';
import './App.css';
import resume from './assets/resume.pdf'
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
          Explore my content:
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
          href="https://soundcloud.com/user-864322219"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muzak2
        </a>
          </li>
          <li>
          <a
          className="App-link"
          href="https://soundcloud.com/matt-colozzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          0ld Music
        </a>
          </li>
          <li>
          <a
          className="App-link"
          href="https://github.com/mattcolozzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
          </li>
          <li>
            <a className="App-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer">My Resume</a>
          </li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
