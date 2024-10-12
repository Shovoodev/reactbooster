import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChalange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timeIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemaining) => prevRemaining - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        onReset={handleReset}
        targetTime={targetTime}
        remainingTime={remainingTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "stop" : "Start"} chalange
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
