import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const carts = useSelector((state) => state.cartProducts);

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        {carts.map((product) => {
          return (
            <div
              style={{
                border: "1px solid black",
              }}
            >
              <h3>{product.name}</h3>
              <h3>가격: {product.price} 원</h3>
              <h3>좋아요: {product.likeCount} 개</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
