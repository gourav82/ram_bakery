import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(intervalRef.current);
      }
  
      // Cleanup on unmount
      return () => clearInterval(intervalRef.current);
    }, [isRunning]);
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    const handleStop = () => {
      setIsRunning(false);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Stopwatch</h1>
        <h2 style={{margin: "20px"}}>{new Date(time * 1000).toISOString().substr(11, 8)}</h2>
        <div>
          <button onClick={handleStart}>Start</button>
          <button style={{margin: "20px"}} onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  };


export default StopWatch