let score = 0;
let wicket = 0;
function add(val) {
  return function(){
    score = score + val;
    root.render(<App />);
  }
}
function addWicket() {
  if(wicket<10){
    wicket = wicket + 1;
    root.render(<App />);
  }
}
const App = () => {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h1>
        SCORE: {score}/{wicket}
      </h1>
      <div>
        <button onClick={add(0)}>0</button>
        <button onClick={add(1)}>1</button>
        <button onClick={add(2)}>2</button>
        <button onClick={add(3)}>3</button>
        <button onClick={add(4)}>4</button>
        <button onClick={add(5)}>5</button>
        <button onClick={add(6)}>6</button>
        <button onClick={addWicket}>Wicket</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
