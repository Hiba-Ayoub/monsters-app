import { FETCH_IMGS, FETCH_SUCCESS, FETCH_FAILURE } from "./imgType";

const initialState = {
  imges: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMGS:
      return {
        ...state,
        imges: [],
        loading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        imges: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        imges: [],
        loading: false,
        error: action.err,
      };

    default:
      return state;
  }
};
