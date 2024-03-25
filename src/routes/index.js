import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home";
import DetailScreen from "../screens/details";

const RouteStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/src/screens/details" element={<DetailScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteStack;
