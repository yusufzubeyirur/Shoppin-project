import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Orders() {
  const { orders } = useContext(GlobalContext);
  return (
    <div className="cart-list">
      {orders.map((order) => (
        <div className="checkout-container" key={order.orderId}>
          <h3>#ID-62Z-{order.orderId}</h3>
          {order.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-price">${item.price}</div>
              <div className="item-name">{item.name}</div>
              <div className="item-expectedDelivery">
                (Teslimatta nakit ödeme beklentisi 3 - 6 gün)
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
