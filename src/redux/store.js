import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./users/userReducer";
import imgReducer from "./imges/imgReducer";
import rootReducer from ".";
import creatSagaMiddlware from "redux-saga"; //import
import rootSaga from "./saga";

const sagaMiddleware = creatSagaMiddlware(); ////create saga
const store = createStore(
  // cakeReducer,
  // userReducer,
  // imgReducer,
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga); /////run saga
// store.dispatch({ type: "HELLLOO" });
// store.dispatch({ type: "HELLLOO" });
// store.dispatch({ type: "HELLLOO" });
// store.dispatch({ type: "HELLLOO" });

// store.dispatch({ type: "LOGOUT" }); // no
store.dispatch({ type: "LOGIN" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "LOBUYGIN" });
store.dispatch({ type: "LOGOUT" }); // yes

export default store;
