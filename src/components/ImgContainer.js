import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreator } from "./../redux/imges/imgAction";
import imgReducer from "../redux/imges/imgReducer";

function ImgContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div>
      {state.photo.imges.map((
        imge ///add photo.imges after combine reusers so we can reach the state imges
      ) => (
        <div>
          <h3>{imge.title}</h3>
          <img src={imge.url} alt={imge.title} />
        </div>
      ))}
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => dispatch(fetchCreator())}
      >
        Get Imges
      </button>
    </div>
  );
}

export default ImgContainer;
