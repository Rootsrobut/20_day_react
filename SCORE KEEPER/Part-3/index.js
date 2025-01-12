let score = 0;
let wicket = 0;
let ballwiseresult=[];
function add(val) {
  return function(){
    if(wicket<10){
      score = score + val;
      ballwiseresult.push(val);
      // console.log(ballwiseresult);
      root.render(<App />);
    }
  }
}
function addWicket() {
  if(wicket<10){
    wicket = wicket + 1;
    ballwiseresult.push('w');
    root.render(<App />);
  }
}
const BallScore=()=>{
  return (
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
  );
}
const App = () => {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h1>SCORE: {score}/{wicket}</h1>
      <BallScore/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
