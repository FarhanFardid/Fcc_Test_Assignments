import  { useState, useRef } from 'react';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const beepRef = useRef(null);

  const handleBreakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel('Session');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => {
      if (!prevIsRunning) {
        intervalRef.current = setInterval(() => {
          setTimeLeft((prevTimeLeft) => {
            if (prevTimeLeft === 0) {
              beepRef.current.play();
              clearInterval(intervalRef.current);
              intervalRef.current = null;
              setTimerLabel((prevTimerLabel) =>
                prevTimerLabel === 'Session' ? 'Break' : 'Session'
              );
              return timerLabel === 'Session' ? breakLength * 60 : sessionLength * 60;
            } else {
              return prevTimeLeft - 1;
            }
          });
        }, 1000);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return !prevIsRunning;
    });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={handleBreakDecrement}>-</button>
      <button id="break-increment" onClick={handleBreakIncrement}>+</button>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement" onClick={handleSessionDecrement}>-</button>
      <button id="session-increment" onClick={handleSessionIncrement}>+</button>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>Start/Stop</button>
      <button id="reset" onClick={handleReset}>Reset</button>
      <audio id="beep" ref={beepRef} src="https://www.soundjay.com/button/beep-07.wav" />
    </div>
  );
}

export default App;
