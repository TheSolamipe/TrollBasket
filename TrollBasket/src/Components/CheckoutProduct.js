import React from "react";
import "./../styles/CheckoutProduct.css";
import { useStateValue } from "./../ContextAPI/StateProvider";

function CheckoutProduct({ id, image, price,name, title, hideButton }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__details">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div>
          <p className="checkoutProduct__title">{name}</p>
          <p className="checkoutProduct__price">#{price}</p>
        </div>
      </div>
      {/* {!hideButton && ( */}
          <span onClick={removeFromBasket} className="checkoutProduct__btn">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9391 6.69712C16.1384 6.69712 16.3193 6.78412 16.4623 6.93112C16.5955 7.08811 16.6626 7.28311 16.6432 7.48911C16.6432 7.55711 16.1102 14.297 15.8058 17.134C15.6152 18.875 14.4929 19.932 12.8094 19.961C11.5149 19.99 10.2496 20 9.00379 20C7.68112 20 6.38763 19.99 5.13206 19.961C3.50498 19.922 2.38168 18.846 2.20079 17.134C1.88763 14.287 1.36439 7.55711 1.35467 7.48911C1.34494 7.28311 1.41108 7.08811 1.54529 6.93112C1.67756 6.78412 1.86818 6.69712 2.06852 6.69712H15.9391ZM11.0647 -1.52588e-05C11.9488 -1.52588e-05 12.7385 0.616979 12.967 1.49697L13.1304 2.22696C13.2627 2.82196 13.7781 3.24295 14.3714 3.24295H17.2871C17.6761 3.24295 18 3.56595 18 3.97694V4.35694C18 4.75794 17.6761 5.09093 17.2871 5.09093H0.713853C0.32386 5.09093 0 4.75794 0 4.35694V3.97694C0 3.56595 0.32386 3.24295 0.713853 3.24295H3.62957C4.22185 3.24295 4.7373 2.82196 4.87054 2.22796L5.02323 1.54597C5.26054 0.616979 6.0415 -1.52588e-05 6.93527 -1.52588e-05H11.0647Z" fill="#E25959"/>
          </svg><p>Delete</p>
          </span>
        {/* )} */}
    </div>
  );
}

export default CheckoutProduct;
