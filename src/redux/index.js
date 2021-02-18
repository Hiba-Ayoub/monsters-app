import { combineReducers } from "redux"; //method
import userReducer from "./users/userReducer";
import imgReducer from "./imges/imgReducer";
const rootReducer = combineReducers({
  person: userReducer,
  photo: imgReducer,
});
export default rootReducer;
