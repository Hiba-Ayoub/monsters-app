import { FETCH_COMMENTS, FETCH_SUCCESS, FETCH_FAILURE } from "./commentsType";

const initialState = {
  comments: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: [],
        loading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        comments: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
