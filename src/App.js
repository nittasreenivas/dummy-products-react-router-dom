import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
//import Signin from "./components/Signin";
import Navigation from "./components/Navigation";
import ProductDescription from "./components/ProductDescription";
import Shop from "./components/Shop";
import ShopDescription from "./components/ShopDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
