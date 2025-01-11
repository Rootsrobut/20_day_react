function sum(){
    let a=10+5;
    return a;
}  
const header =<h2>JSX Expression</h2>;
function App() {
  var name = "sumit kuamr";
  let age = 24;
  let demo=null;
  let demo1;
  let demo2=false;
  return (
     <>
      {header}
      <p>My name is {name}.</p>
      <p>My age is {age}.</p>
      <p>Null value: {String(demo)}</p>
      <p>undefine value: {String(demo1)}</p>
      <p>Boolean value: {String(demo2)}</p>
      <p>Calling function:{sum()}</p> 
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
