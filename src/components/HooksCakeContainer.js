import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  const settings = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes in store is {settings.numOfCakes}</h2>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => dispatch(buyCake())}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
