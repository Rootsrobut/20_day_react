let score = 0;
let wicket = 0;
let ballwiseresult=[];
let hit=0;
function add(val) {
  return function(){
    if(wicket<10){
      hit=val;
      score = score + val;
      ballwiseresult.push(val);
      console.log(ballwiseresult);
      root.render(<App />);
    }
  }
}
function addWicket() {
  if(wicket<10){
    hit='w';
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
const Result=()=>{
    return(
       <div>
        {ballwiseresult.map((res,index)=>(
          <>
             {index%6===0 ? <br/>:null}
             <sapn key={index}>{res==0 ? <strong>.</strong>:res}</sapn>&nbsp;&nbsp;&nbsp;
          </>
        ))}
       </div>
    );
}
function handleSumbit(event){
   event.preventDefault();
}
const FORM=()=>{
  return(
    <div>
     <form onSubmit={handleSumbit}>
         <input type="text" value={hit}/>
         <input type="text" />
         <br />
         <br />
         <button>Submit</button>
     </form>
    </div>
  );
}
const App = () => {
  return (
    <div>
      <h1>SCORE KEEPER</h1>
      <h1>SCORE: {score}/{wicket}</h1>
      <BallScore/>
      <Result/>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <FORM/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
