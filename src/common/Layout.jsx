import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          {/* 메인 페이지로 이동 */}
          로고
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div
            onClick={() => {
              alert("로그인 페이지로 이동합니다.");
              navigate("/login");
            }}
            // useNavigate로 페이지 이동
            style={{ cursor: "pointer" }}
            // style 부여
          >
            로그인
          </div>
          <div
            onClick={() => {
              alert("회원가입 페이지로 이동합니다.");
              navigate("/signup");
            }}
            style={{ cursor: "pointer" }}
          >
            회원가입
          </div>
        </div>
      </header>
      <Outlet />
      {/* Route 안의 요소들을 보여줄 위치 */}
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}

export default Layout;
