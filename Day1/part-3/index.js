// Components in React

// 1. Function Components

// function App(){
//      return(
//         <>
//          <h1 className="head">Hello JSX</h1>
//          <p>This is created using JSX</p>
//          </>
//      );
// }

//this code convert into arrow function component
function Name(){
     return(
          <>
          <h1 className="auth-name">This is sumit kumar</h1>
          </>
     )
}
const App = () => (
          <>
          <h1 className="head">Hello JSX</h1>
          <p>This is created using JSX</p>
          </>
     )
const App2 = () => {
     return(
          <><App/><Name/></>
          );
     }
ReactDOM.createRoot(document.getElementById("root")). render(<App2/>);



















// 2. Class Components

// import React from 'react';
// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to My Class Component!</h1>
//         <p>This is rendered using the render() method.</p>
//       </div>
//     );
//   }
// }
// export default MyComponent;
// ReactDOM.createRoot(document.getElementById("root")). render(<MyComponent/>);
