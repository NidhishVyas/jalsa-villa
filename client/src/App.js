import React, { /*useState, useEffect,*/ Suspense } from "react";
import { /*useLocation,*/ Route, Routes } from "react-router-dom";
import "boxicons";
import * as ROUTES from "./Constants/routes";
import GlobalStyle from "./GlobalStyles";
import { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense>
          <Routes>
            <Route path={ROUTES.HOMEPAGE} element={<Home />} />
            <Route path={ROUTES.ADMINPAGE} element={<Admin />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
