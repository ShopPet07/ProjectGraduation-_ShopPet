import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes/index";
import MainPage from "./page/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
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
