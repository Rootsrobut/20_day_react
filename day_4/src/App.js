import React from 'react';


import MovieList from './MovieList';
export default class APP extends React.Component {
      render(){
        return (
          <>
            <h1>Movies App</h1>
            <MovieList />
          </>
          );
      }
}
