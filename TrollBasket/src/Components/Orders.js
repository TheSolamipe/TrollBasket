import React, { useState, useEffect } from "react";
import "./../styles/Orders.css";
// import { db } from "./../firebase";
import { useStateValue } from "../ContextAPI/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // db.collection("users")
      //   .doc(user?.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) =>
      //     setOrders(
      //       snapshot.docs.map((doc) => ({
      //         id: doc.id,
      //         data: doc.data(),
      //       }))
      //     )
      //   );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>I am the orders page</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
