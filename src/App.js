export default function App() {
  return (
    <div className="app">
      <button>Get my position</button>
      <p>
        Your GPS position :{" "}
        <a target="_blank" rel="noreferrer" href="#">
          lat,lng
        </a>
      </p>
      <p>You requested position 0 times</p>
    </div>
  );
}
