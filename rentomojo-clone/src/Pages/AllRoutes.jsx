import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "./Cartpage";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import Paymentspage from "./Paymentspage";
import Productpage from "./Productpage";
import Productspage from "./Productspage";
import Settings from "./Settings";
import Signuppage from "./Signuppage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>

      <Route path="/products" element={<Productspage />}></Route>

      <Route path="/product/:id" element={<Productpage />}></Route>

      <Route path="/cart" element={<Cartpage />}></Route>

      <Route path="/login" element={<Loginpage />}></Route>

      <Route path="/payment" element={<Paymentspage />}></Route>

      <Route path="/settings" element={<Settings />}></Route>

      <Route path="/dashboard" element={<Dashboard />}></Route>

      <Route path="/signup" element={<Signuppage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
