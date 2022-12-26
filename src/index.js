// import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import HelloComponent from "./component/HelloComponent";
// import StateFullComponent from "./container/StateFullComponent";
// import YoutubeComp from "./component/YoutubeComponent/Component";
import Home from "./container/Home/Home";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/reducer/globalReducer";

// Store
// const storeRedux = createStore(rootReducer);

// const HelloWorld = () => {
//   return <p>Hello World</p>;
// };

// StateLess Component & StateFul Component
// const HelloComponent = () => {
//   return <p>Hello Functional Component</p>;
// };
// class StateFullComponent extends React.Component {
//   render() {
//     return <p>StateFull Component</p>;
//   }
// }

// Dynamic Component Menggunakan Props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // <HelloWorld />
  // <p>Hello World From React DOM</p>
  // <HelloComponent />
  // <StateFullComponent />
  // <Provider store={storeRedux}>
  //   <Home />
  // </Provider>
  <Home />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
