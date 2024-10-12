import Player from "./components/Player.jsx";
import TimerChalange from "./components/TimerChalange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalange title="Easy" targetTime={1} />
        <TimerChalange title="Not Easy" targetTime={5} />
        <TimerChalange title="getting hard" targetTime={2} />
        <TimerChalange title="hard" targetTime={3} />
      </div>
    </>
  );
}

export default App;
