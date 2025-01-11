function App() {
  let loggedIn=true;
  let name='Sumit';
  let lastname='kumar';
  return (
    <>
    {/* and    it return first fasly valuse . when all previous comp are true the return  last truty*/}

     {loggedIn  && <p>Welcome to the Portal</p>}
    
    { <h1>Hello {loggedIn ? name || lastname : 'User'}</h1> }
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);