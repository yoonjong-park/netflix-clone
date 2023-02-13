import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
