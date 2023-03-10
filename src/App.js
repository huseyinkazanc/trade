import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Try from "./pages/Try";
import TrendKolik from "./pages/TrendKolik";
import GetfitatHome from "./pages/GetfitatHome";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/trendkolik" element={<TrendKolik />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gitfitathome" element={<GetfitatHome />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
