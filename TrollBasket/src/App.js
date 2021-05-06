import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
// import Login from "./Components/Login";
// import { auth } from "./firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
import ProductView from "./Components/ProductView";

const promise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads.....

    // auth.onAuthStateChanged((authUser) => {
    //   console.log("The user is >>>> ", authUser);

      // if (authUser) {
        //the user was logged in/ the user just logged in
      //   dispatch({
      //     type: "SET_USER",
      //     user: authUser,
      //   });
      // } else {
        // the user is logged out
    //     dispatch({
    //       type: "SET_USER",
    //       user: null,
    //     });
    //   }
    // });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/productView">
            <ProductView />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
