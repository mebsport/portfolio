import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import styled from 'styled-components';
import { useEffect } from 'react';

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
  useEffect(() => {
    const eventHandler = (e) => e.preventDefault();

    window.addEventListener('contextmenu', eventHandler);
    return () => window.removeEventListener('contextmenu', eventHandler);
  }, []);

  return (
    <div className='App'>
      <Hello>Hi, I'm Marcelus</Hello>
    </div>
  );
}

export default App;
