import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <h1>Sepet</h1>
      {!cart.length ? (
        <p>Ürün Eklenmedi.Lütfen sepetinize bir şey ekleyin</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-price">${item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Beklenen Teslimat Süresi 3 - 6 gün)
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Sonraki</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
