import React from "react";
import Moviecard from "./Moviecard";
export default class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers show in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      cart: false,
    };
  }
  render() {
    // const { title, plot, price, rating, stars, fav, cart } = this.state;
    return (
      <>

    <Moviecard movies={this.state}/>
        {/* <Moviecard
          title={title}
          plot={plot}
          price={price}
          rating={rating}
          stars={stars}
          fav={fav}
          cart={cart}
        /> */}
      </>
    );
  }
}
