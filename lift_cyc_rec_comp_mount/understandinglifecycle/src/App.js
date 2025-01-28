import ComponentA from './ComponentA';
import React from 'react';
import ErrorBoundary  from './ErrorBoundary'
class App extends React.Component{
  render(){
    return (
      <>
      <h1>App</h1>
      <ErrorBoundary>
      <ComponentA />
      </ErrorBoundary>
      </>
    );
  }
}
export default App;
