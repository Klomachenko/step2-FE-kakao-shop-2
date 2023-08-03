import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

const staticServerUri = process.env.REACT_APP_PATH || "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={staticServerUri + "/login"} element={<LoginPage />}></Route>
          <Route path={staticServerUri + "/signup"} element={<RegisterPage />}></Route>
          {/* {공통 레이아웃} */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUri + "/"} element={<MainPage />}></Route>
            <Route path={staticServerUri + "/"} element={<ProductDetailPage />}></Route>
          </Route>
        </Routes>
        <Route element={<RequiredAuthLayout />}>
          <Route path={staticServerUri + "/cart"} element={<CartPage />}></Route>
          <Route path={staticServerUri + "/order"} element={<OrderPage />}></Route>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
