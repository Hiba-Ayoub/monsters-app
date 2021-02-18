import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakeNum) => ({
  type: BUY_CAKE,
  payload: cakeNum,
});
