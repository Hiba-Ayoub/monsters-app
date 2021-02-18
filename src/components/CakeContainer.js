import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  const [cakeNumber, setCakeNumber] = useState(0);
  console.log(cakeNumber, "cakeNumbereeeeeeeeeeeeeee");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes in store is:{props.numOfCakes}</h2>
      <div class="form-group">
        <label for="">How many cakes?</label>
        <input
          type="text"
          class="form-control"
          name="cake"
          id="cake"
          aria-describedby="helpId"
          placeholder=""
          onChange={(e) => setCakeNumber(e.target.value)}
        />
      </div>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => props.buyCake(cakeNumber)}
      >
        Buy Cake
      </button>

      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => dispatch({ type: "BUY_CAKE", payload: cakeNumber })}
      >
        Buy Cake 2
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cakeNuuu) => dispatch(buyCake(cakeNuuu)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
