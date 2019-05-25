import "./config/reactotron";
import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "~/store";
import Map from "~/pages/Map";

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
