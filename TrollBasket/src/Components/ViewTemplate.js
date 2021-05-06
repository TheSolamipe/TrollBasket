import React , { useState }from "react";
import "./../styles/ViewTemplate.css";
import { useStateValue } from "./../ContextAPI/StateProvider";

function ViewTemplate({ id, image, price,name, title, rating}) {
    const [, dispatch] = useStateValue();
    const [clicked, setClicked] = useState(false);

    const addToBasket = () => {
        // add item to basket...
        dispatch({
          type: "ADD_TO_BASKET",
          payload: {id, title, image, name, rating, price },
        });
        setClicked(true)
      };

  return (
    <div className="viewTemplate">
      {clicked && (
        <div className="viewTemplate__message">
          <p>Item added to cart successfully</p>
          <span ><svg width="12" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M1.33337 10.6667L10.6667 1.33334M1.33337 1.33334L10.6667 10.6667L1.33337 1.33334Z" stroke="#071827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
        </div>
      )}
      <div className="viewTemplate__image"><img src={image} alt=""  /></div>
      <div className="viewTemplate__details">
        <p className="viewTemplate__title">{title}</p>
        <p className="viewTemplate__price">
            <strong>#{price}</strong>
            <span>/Piece</span>
        </p>
        <div className="viewTemplate__description">
            <h4>Product Description</h4>
            <svg width="8" height="100%" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33331 1.66666L6.66665 7L1.33331 12.3333" stroke="#0B0C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="viewTemplate__rating">
            <div className="viewTemplate__rating--title">
                <p>Review and Ratings</p>
                <span>View all</span>
            </div>
            <span>
            {Array(rating)
                .fill()
                .map((_) => (
                <span role="img" aria-label="star-rating">
                    🌟
                </span>
                ))} <p>{rating}.0</p>
            </span> 
        </div>
        <div className="viewTemplate__review">
            <p>This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!</p>
            <div className="viewTemplate__review--person">
                <img src="../Assets/man.png" alt="man" />
                <p>Segun Arinze</p>
            </div>
        </div>
      </div>
      <div className="viewTemplate__btns">
        <button onClick={addToBasket}className="viewTemplate__btns--blue">Add to Cart</button>
        <button  className="viewTemplate__btns--white">Wishlist</button>
      </div>
    </div>
  );
}

export default ViewTemplate;
