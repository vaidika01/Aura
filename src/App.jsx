import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ProductList from "./Pages/ProductList";
import SignUp from "./Pages/SignUp";
import Password from "./Pages/Password";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
