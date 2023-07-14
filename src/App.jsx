import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {" "}
        {/* 반복되는 부분 Component화 */}
        <Route path="/" element={<Main />} />
        {/* 컴포넌트 별로 원하는 url을 지정합니다. */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* URL Parameter */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Route 추가 */}
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
              {/* UX를 좋게 하기 위해 */}
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
