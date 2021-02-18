import { BUY_CAKE } from "./cakeTypes";

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
const initialState = {
  numOfCakes: 100,
  isEmpty: false,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};
export default cakeReducer;
