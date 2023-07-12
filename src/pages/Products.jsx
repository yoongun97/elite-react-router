import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Products(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = props;
  // props로 내려받은 상품목록

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
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
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
              <>
                <Link to={`/products/${product.id}`} key={product.id}>
                  <div
                    key={product.id}
                    style={{
                      width: "200px",
                      height: "240px",
                      backgroundColor: "#068FFF",
                    }}
                  >
                    <p style={{ color: "white" }}>{product.name}</p>
                    <p style={{ color: "white" }}>{product.price}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
