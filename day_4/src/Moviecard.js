import React from "react";

export default class Moviecard extends React.Component {
  constructor(){
    super();
    this.state={
      title:"The Avengers",
      plot:"Supernatural powers show in the movie.",
      price:199,
      rating:8.9,
      stars:0,
      fav:false,
      cart:false,

    }
    // this.addStars=this.addStars.bind(this); alternate 1
  }
  // addStars=()=>{                            alternate 2
  //   console.log('this.state:',this.state);
  // }
  addStars(){
    //form 1
    this.setState({
      stars:this.state.stars+0.5,
    },()=> console.log('stars inside callback: ',this.state.stars));
    console.log('stars: ',this.state.stars);

    // this.state.stars+=0.5;
    // console.log('this.state.stars:',this.state.stars);
  //form 2
  // this.setState((prevState)=>{
  //   if(this.state.stars>5){
  //     alert("you cannot rate more than 5 stars");
  //     return;
  //   }
  //   return {stars:prevState.stars+0.5}
  //   }
  //   );

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
    const {title,plot,price,rating,stars,fav,cart}=this.state;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/868e2d38155793.57575971b116a.jpg"
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

                {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
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
