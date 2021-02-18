import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreator } from "./../redux/users/userAction";
function UsersContainers() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); //get state كلا
  useEffect(() => {
    dispatch(fetchCreator());
  }, []);
  console.log(state);

  return (
    <div>
      {state.users &&
        state.users.length != 0 &&
        state.users.map((user) => <h1>{user.name}</h1>)}

      {state.error != null && <h2>{state.error}</h2>}

      {state.loading && <h2>Loading........</h2>}
    </div>
  );
}

export default UsersContainers;
