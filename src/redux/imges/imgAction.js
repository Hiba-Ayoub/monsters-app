import { FETCH_IMGS, FETCH_SUCCESS, FETCH_FAILURE } from "./imgType";
import axios from "axios";

export const fetchImgs = () => ({
  type: FETCH_IMGS,
});
export const fetchSuccess = (imges) => ({
  type: FETCH_SUCCESS,
  payload: imges,
});
export const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: err,
});
export const fetchCreator = () => {
  return (dispatch) => {
    dispatch(fetchImgs());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  };
};
