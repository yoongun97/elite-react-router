import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setProductDetails,
  updateQuantity,
} from "../redux/modules/CartProducts";

export default function Product() {
  const { id } = useParams();
  // url의 product의 id 가져오기
  const products = useSelector((state) => state.products);

  const [selectedOption, setSelectedOption] = useState(""); // 선택된 옵션
  const [showQuantity, setShowQuantity] = useState(false); // 갯수 항목 보여주기 여부
  const [quantity, setQuantity] = useState(0); // 선택된 갯수
  const dispatch = useDispatch();

  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value); // 선택된 옵션의 값 업데이트
    setShowQuantity(true); // 갯수 항목 보여주기 설정
  };

  const quantityPlusHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // 갯수 증가
    dispatch(updateQuantity({ productId: id, quantity: 1 })); // 상태 업데이트 액션 디스패치
  };

  const quantityMinusHandler = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0)); // 갯수 감소 (0보다 작아지지 않도록)
    dispatch(updateQuantity({ productId: id, quantity: -1 })); // 상태 업데이트 액션 디스패치
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
            .filter((product) => product.id == id)
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
                    {showQuantity && (
                      <div>
                        <p style={{ margin: 0 }}>구매옵션 : {selectedOption}</p>
                        <span style={{ margin: 0, marginRight: "5px" }}>
                          개수 : {quantity}
                        </span>
                        <button onClick={quantityPlusHandler}>+</button>
                        <button onClick={quantityMinusHandler}>-</button>
                        <p style={{ margin: 0 }}>
                          총 금액 : {product.price * quantity}
                        </p>

                        <button
                          onClick={() => {
                            if (selectedOption === "" || quantity === 0) {
                              alert("옵션을 선택해주세요");
                            } else {
                              dispatch(
                                addToCart({
                                  ...product,
                                  selectedOption, // 선택된 옵션 추가
                                  quantity, // 상품 갯수 추가
                                })
                              );
                              dispatch(
                                setProductDetails({
                                  option: selectedOption,
                                  quantity,
                                })
                              );
                              alert("장바구니에 추가되었습니다.");
                            }
                          }}
                        >
                          장바구니 추가하기
                        </button>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
