import React from "react";
import "./../styles/Subtotal.css";
import { useStateValue } from "./../ContextAPI/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../ContextAPI/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <span className="subtotal__value">
              <p>Subtotal ({basket.length} items):</p> <p>{value}</p>
            </span>
            <span className="subtotal__value">
              <p>Total</p> <strong>{value}</strong>
            </span>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"#"}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
