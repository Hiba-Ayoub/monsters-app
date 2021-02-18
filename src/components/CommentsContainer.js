import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreator } from "../redux/comments/commentsAction";

function CommentsContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); //get state كلا

  useEffect(() => {
    dispatch(fetchCreator());
  }, []);
  return (
    <div>
      {state.comments.length != 0 &&
        state.comments.map((comments) => <h1>{comments}</h1>)}
      {state.error != null && <h2>{state.error}</h2>}
    </div>
  );
}

export default CommentsContainer;
