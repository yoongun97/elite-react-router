import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main(props) {
  const navigate = useNavigate();
  // 추가적인 코드를 짤 수 있다.
  const { products } = props;
  // props로 내려받은 상품목록

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              alert("이동하시겠습니까?");
              navigate("/products");
            }}
            style={{ cursor: "pointer" }}
          >
            🔥 여름 추천템 🔥
          </h2>
          <Link to="/products">더보기</Link>
          {/* 특정 주소로 넘어갈 수 있게 하는 역할 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product) => {
              return (
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
              );
            })}
            {/* map 함수로 배열을 돌며 상품들 카드 생성 */}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
