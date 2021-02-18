import { FETCH_FAILURE, FETCH_USERS, FETCH_SUCCESS } from "./userType";

const initialState = {
  users: [], //store users
  loading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: "",
        users: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: "",
      };

    case FETCH_FAILURE:
      return {
        ...state,
        users: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
