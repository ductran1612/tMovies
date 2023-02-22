import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { publicRoutes } from "./config/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
