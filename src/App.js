import { useState } from "react";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  function getPosition() {
    setCountClicks((c) => c + 1);
  }

  return (
    <div className="app">
      <button onClick={getPosition}>Get my position</button>
      <p>
        Your GPS position :{" "}
        <a target="_blank" rel="noreferrer" href="#">
          lat,lng
        </a>
      </p>
      <p>You requested position {countClicks} times</p>
    </div>
  );
}
