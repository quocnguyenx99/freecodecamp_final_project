import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function Pomodoro() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isRest, setIsRest] = useState(false);

  const beepRef = useRef(null)

  useEffect(() =>{
    setTime(isRest ? breakTime * 60: sessionTime * 60)
  },[sessionTime, breakTime, isRest])

  useLayoutEffect(() => {
    if (breakTime <= 0) {
      setBreakTime(1);
    }
    if (breakTime > 10) {
      setBreakTime(10);
    }
  }, [breakTime]);

  useLayoutEffect(() => {
    if (sessionTime <= 0) {
      setSessionTime(1);
    }
    if (sessionTime > 60) {
      setSessionTime(60);
    }
  }, [sessionTime]);

  useEffect(() => {
    let timer = null;
    if (isRunning && time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isRunning && time === 0) {
        beepRef.current.play()
      setIsRunning(false);
      setIsRest(!isRest);
      setTime(isRest ? sessionTime * 60 : breakTime * 60);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time, isRunning, isRest, sessionTime, breakTime]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
    setIsRest(false);
    // setTime(sessionTime * 60)
  }

  function resetTimer() {
    setIsRunning(false);
    setIsRest(false);
    setTime(sessionTime * 60);
    setSessionTime(25);
    setBreakTime(5);
  }

  function formatTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <>
      <div className="max-w-xl p-4 backdrop-sepia-0 bg-white/30  rounded-lg">
        <h1 className="main-title text-slate-50 text-5xl font-semibold text-center sm:text-6xl">
          Pomodoro Timer
        </h1>
        <div className="length-wrapper mt-4 flex items-center  flex-wrap justify-center gap-5">
          <div className="length-control">
            <p className="break-label mb-4 text-slate-50 font-medium text-xl text-center">
              Break Length
            </p>
            <div className="flex items-center justify-center gap-2 ">
              <button
                className="break-decrement btn  p-1"
                onClick={() => setBreakTime(breakTime - 1)}
              >
                Decrement
              </button>
              <p className="text-white font-medium text-xl">{breakTime}</p>
              <button
                className="break-increment btn p-1"
                onClick={() => setBreakTime(breakTime + 1)}
              >
                Increment
              </button>
            </div>
          </div>
          <div className="length-control ">
            <p className="break-label mb-4 text-slate-50 font-medium text-xl text-center">
              Session Length
            </p>
            <div className="flex items-center justify-center gap-2 ">
              <button
                className="session-decrement btn p-1"
                onClick={() => setSessionTime(sessionTime - 1)}
              >
                Decrement
              </button>
              <p className="text-white font-medium text-xl">{sessionTime}</p>
              <button
                className="session-increment btn p-1"
                onClick={() => setSessionTime(sessionTime + 1)}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 flex flex-col items-center justify-center bg-red-500 text-slate-50 rounded-md border border-slate-100 ">
          <div className="timer">
            <div className="timer-wrapper text-center">
              <p className="timer-label text-3xl font-medium">
                {isRest ? "Break" : "Session"}
              </p>
              <p className="timer-left mt-2 text-6xl">{formatTimer(time)}</p>
            </div>
          </div>
          <div className="timer-control mt-6 w-full flex justify-evenly">
            <button
              className="start btn px-4 py-2"
              onClick={isRunning ? stopTimer : startTimer}
            //   disabled={isRunning}
            >
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className="reset btn px-4 py-2" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="author mt-8 text-center text-slate-50 font-medium">
        Designed and Coded by <br></br>
        <a href="https://github.com/quocnguyenx99/freecodecamp_final_project" target="_blank" className="text-green-400 text-xl" rel="noreferrer">
          Henry
        </a>
      </div>
      <audio
        ref={beepRef}
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </>
  );
}

export default Pomodoro;
