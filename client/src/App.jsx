import React, { Fragment, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { publicRoutes } from "./routes/index";
import MainPage from "./page/Main";
import img_background from "./assets/images/animation-background.svg";

import { fetchPosts } from "./api/postsApi";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
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
  );
}

export default App;
