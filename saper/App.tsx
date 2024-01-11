import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { Page } from "./src/components/page";

export default function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
