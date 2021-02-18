import { FETCH_COMMENTS, FETCH_SUCCESS, FETCH_FAILURE } from "./commentsType";
import axios from "axios";

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const fetchSuccess = (comments) => ({
  type: FETCH_SUCCESS,
  payload: comments,
});
export const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: err,
});

export const fetchCreator = () => {
  return (dispatch) => {
    dispatch(fetchComments());
    axios
      .get("url")
      .then((res) => {
        dispatch(fetchSucces(res.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  };
};
