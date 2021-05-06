import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Product.css";
import { useStateValue } from "./../ContextAPI/StateProvider";

function Product({ id, title, image, name, rating, price }) {
  const [, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   // add item to basket...
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     payload: { id, title, image, rating, price },
  //   });
  // };

  const addToView = () =>{
    // add item to View...
    dispatch({
      type: "ADD_TO_VIEW",
      payload: { id, title, name, image, rating, price },
    });
  }

  return (
    <Link to="/productView" onClick={addToView}>
      <div className="product" >
        <img src={image} alt="" />
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>#</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <span role="img" aria-label="star-rating">
                  🌟
                </span>
              ))}
          </div>
        </div>
        {/* <button onClick={addToBasket}>Add to Cart</button> */}
      </div>
    </Link>
  );
}

export default Product;
