import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

// IMPORT STYLES
import "./styles/styles.css";

// IMPORT COMPONENTS
import Header from "./components/stdElements/Header";
import Footer from "./components/stdElements/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);
