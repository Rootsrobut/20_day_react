let score = 0;
let wicket = 0;
let ballwiseresult=[];
let hit=0;
let inputRef=React.createRef();
function add(val) {
  return function(){
      hit=val;
      root.render(<App />);
    }
}
function addWicket() {
    hit='w';
    root.render(<App />);
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

function handleSumbit(event){
   event.preventDefault();
   if(hit=='w'){
    wicket=wicket+1;
   }
   else{
    score=score+hit;
   }
   ballwiseresult.unshift(
    // <span>{hit}  {inputRef.current.value}</span>
    <span>{`${hit}   ${inputRef.current.value}`}</span>
  );
  //  console.log(ballwiseresult);
  //  console.log(inputRef.current.value);
  hit=0;
  inputRef.current.value=" ";
   root.render(<App />);
}
const FORM=()=>{
  return(
    <div>
     <form onSubmit={handleSumbit}>
         <input type="text" value={hit}/>
         <input ref={inputRef} placeholder='Add a Comment'/>
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
      <hr />
      <br />
      <br />
      <FORM/>
      {ballwiseresult.map((a,index)=>(<p key={index}>{a}</p>))}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
