import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import AboutMe from './components/AboutMe';

const Hello = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid blue; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #0000ff;
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <div className='Intro'>
        <Hello>Hi, I'm Marcelus</Hello>
      </div>
      <div className='Content'>
        <AboutMe 
        question='Who am I?'
        answerParagraph='I am Marcelus, a programmer, photographer, DJ, and I love to tinker. I was born and raised in Windsor, Connecticut. I love all things cars, and all things robotics. Continue scrolling to find out what I am currently working on.'
        image='/20230616-IMG_7392.jpg'
        />
      </div>
      
    </div>
  );
}

export default App;
