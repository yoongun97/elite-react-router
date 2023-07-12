import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const { id } = useParams();
  // url의 product의 id 가져오기
  const { products } = props;
  // props로 내려받은 상품목록

  const [selectedOption, setSelectedOption] = useState("옵션을 선택하세요."); // 선택된 옵션

  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value); // 선택된 옵션의 값 업데이트
  };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products
            .filter((product) => {
              return product.id == id;
            })
            // url에 들어있는 id와 같은 id의 상품 필터링
            .map((product) => {
              return (
                <>
                  <div
                    key={product.id}
                    style={{
                      width: "200px",
                      height: "240px",
                      backgroundColor: "#068FFF",
                    }}
                  >
                    {product.name}
                    {/* id에 해당하는 상품 가져오기 */}
                  </div>
                  <div>
                    <h3>가격: {product.price}</h3>
                    <h3>좋아요: {product.likeCount}개</h3>
                    <h3>구매옵션</h3>
                    <select
                      style={{
                        width: "100px",
                      }}
                      value={selectedOption}
                      // 선택된 옵션 값 설정
                      onChange={optionChangeHandler}
                      //  선택된 옵션 변경 시 함수 실행
                    >
                      <option value="">선택하세요</option>
                      {/* 옵션 초기값 */}
                      {product.options.map((option) => {
                        return <option>{option}</option>;
                      })}
                      {/* product의 옵션들 보여주기 */}
                    </select>
                    <p>구매옵션 : {selectedOption}</p>
                    {/* 선택된 옵션 */}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
