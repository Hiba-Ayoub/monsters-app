import React from 'react'

import logo from "./logo.svg";
import Test from "./components/test/Test";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersContainers from "./components/UsersContainers";
import ImgContainer from "./components/ImgContainer";
import { useHistory, useLocation } from "react-router-dom";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import CounterHooks from "./lesson1/CounterHooks";
// import FetchApi from "./FetchApi";
import ReactClass from "./components/ReactClass";
function App() {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push("/about");
  };
  console.log(history, "hissssssssssssss");
  console.log(location, "looooooooca");

  return (
    <Provider store={store}>
      <div className="App">
        {/* <CounterHooks /> */}
        {/* <FetchApi /> */}
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer /> */}

        {/* <ImgContainer /> */}
        {/* <UsersContainers />*/}
        <ReactClass/>
        {/* <Test/> */}
        {/* <button onClick={handleClick}>to about</button> */}
      </div>
    </Provider>
  );
}

export default App;
