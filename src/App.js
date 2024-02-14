import "./App.css";
import { Provider, ErrorBoundary } from "@rollbar/react"; // Provider imports 'rollbar'
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import CartContextProvider from "./providers/cart/CartContext";
import {
  TapTop
} from "./components";

import "./assets/scss/app.scss";
import { useState } from "react";
import routes from "./routes/path";

const rollbarConfig = {
  accessToken: "1f5fb40f74814445ac391e58cd7b2ea4",
  environment: "testenv",
};

function TestError() {
  const a = null;
  return a?.hello();
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
        {isLoading ? (
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <CartContextProvider>
              <BrowserRouter>
                <Routes>
                  {routes.map((route, index) => <Route key={index} {...route} />)}
                </Routes>
              </BrowserRouter>
            </CartContextProvider>
            <ToastContainer />
            <TapTop />
          </>
        )}
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
