import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../redux/modules/CartProducts";

function Cart() {
  const cartProducts = useSelector((state) => state.cartProducts.products);
  const dispatch = useDispatch();

  const quantityPlusHandler = (productId) => {
    dispatch(updateQuantity({ productId, quantity: 1 }));
  };

  const quantityMinusHandler = (productId) => {
    dispatch(updateQuantity({ productId, quantity: -1 }));
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        {cartProducts.map((product) => {
          const { id, name, price, selectedOption, quantity } = product;
          return (
            <div
              key={id}
              style={{
                border: "1px solid black",
              }}
            >
              <h3>{name}</h3>
              <h3>가격: {price} 원</h3>
              <h3>옵션: {selectedOption}</h3>
              <span style={{ fontWeight: "bold" }}>개수 : {quantity} 개</span>
              <button onClick={quantityPlusHandler(id)}>+</button>
              <button onClick={quantityMinusHandler(id)}>-</button>
              <h3>총 비용: {price * quantity} 개</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
