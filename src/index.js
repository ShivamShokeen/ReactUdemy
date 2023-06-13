import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./context/book";
import { NavigationProvider } from "./context/navigation";
import { store } from "./ReactRedux/StoreRedux";
import { Provider as ReactReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactReduxProvider store={store}>
    <NavigationProvider>
      <React.StrictMode>
        <Provider>
          <App />
        </Provider>
      </React.StrictMode>
    </NavigationProvider>
  </ReactReduxProvider>
);
reportWebVitals();
