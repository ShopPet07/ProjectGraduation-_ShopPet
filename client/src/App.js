import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { publicRoutes } from "./routes/index";
import MainPage from "./page/Main";
import img_background from "./assets/images/animation-background.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <img className="image-background" src={img_background} alt="" />
        <Routes>
          {publicRoutes.map((route) => {
            const Layout = route.layout == null ? Fragment : MainPage;
            const Page = route.components;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
