import {
  put,
  call,
  fork,
  takeEvery,
  takeLatest,
  take,
} from "redux-saga/effects";

// function* workerHello() {
//   console.log("hellllllow");
// }

// function* watchHello() {
//   yield takeEvery("HELLLOO", workerHello);
// }

// function* watchHello() {
//   yield take("HELLLOO");
//   yield call(workerHello);
// }

function* loginWorker() {
  console.log("Login");
}

function* logoutWorker() {
  console.log("logout");
}

function* addToCartWorker() {
  console.log("add to cart");
}

function* buyWorker() {
  console.log("buy");
}

function* rootWatcher() {
  // yield take("LOGIN");
  // yield call(loginWorker);
  // yield take("ADD");
  // yield call(addToCartWorker);
  // yield take("BUY");
  // yield call(buyWorker);
  // yield take("LOGOUT");
  // yield call(logoutWorker);
}

export default rootWatcher;
