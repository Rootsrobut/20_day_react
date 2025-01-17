import React from "react";

export default class Moviecard extends React.Component {
  addStars(){
    this.setState({
      stars:this.state.stars+0.5,
    },()=> console.log('stars inside callback: ',this.props.stars));
    console.log('stars: ',this.state.stars);
  }
  subStars(){
    if(this.state.stars<=0){
      alert('You cannot rate less than 0');
      return;
    }
    this.setState((prevState)=>{
      return {stars:prevState.stars-0.5}
      }
      );
  }
  handleFav=()=>{
    this.setState({
      fav:!this.state.fav
      })
  }
  handleCart=()=>{
    this.setState({
      cart:!this.state.cart
      })
  }
  render() {
    console.log(this.props.movies);
    const {title,plot,poster,rating,price,stars,fav,cart}=this.props.movies;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src= {poster}
                alt="Poster"
              />
            </div>

            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs.{price}</div>
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    className="str-btn"
                    alt="decrease"
                    src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                    onClick={this.subStars.bind(this)}
                  />
                  <img
                    alt="star"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    className="stars"
                  />
                  <img
                    className="str-btn"
                    alt="increase"
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    onClick={this.addStars.bind(this)}
                  />
                  <span className="starCount">{stars}</span>
                </div>
                <button className={fav?"unfavourite-btn":"favourite-btn"}
                onClick={this.handleFav}>{fav?"unfavourite":"favourite"}</button>
                <button className={cart?"remove-cart-bth":"cart-btn"} onClick={this.handleCart}>{cart?'Remove to cart':'Add to cart'}</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
