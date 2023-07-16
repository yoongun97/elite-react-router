import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sortPrice, resetPrice } from "../redux/modules/ProductsSlice";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(sortPrice());
          }}
        >
          가격순정렬
        </button>
        <button
          onClick={() => {
            dispatch(resetPrice());
          }}
        >
          리셋
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div
                  key={product.id}
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                    color: "white",
                  }}
                >
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
