import { FETCH_USERS, FETCH_SUCCESS, FETCH_FAILURE } from "./userType";
import axios from "axios";

export const fetchUsers = () => ({
  type: FETCH_USERS, //no payload
});

export const fetchSucces = (users) => ({
  type: FETCH_SUCCESS,
  payload: users,
});

export const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: err,
});

///action creator //function to call api//no parametrs
export const fetchCreator = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchSucces(res.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  };
};
