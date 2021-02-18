import { ICE_CREAM } from "./iceCreamType";

const initialState = {
numOfIceCream=100,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ICE_CREAM:
          return {
              ...state,
          numOfIceCream=state.numOfIceCream-1,
          };

  default:
    return state
  }
};
