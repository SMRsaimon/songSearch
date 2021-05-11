
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { receiveApiData, requestApiData, REQUEST_API_DATA } from "./action/userAction";


console.log("top saga", requestApiData() )
const setName = function*({
    payload: { name },

}) {
  try {
    yield put(receiveApiData({ profile: [] }));
    console.log(name, "saga")
    const response = yield call(
      axios.get,
      `https://itunes.apple.com/search?term=${name}`
    );
    yield put(receiveApiData({ profile: response.data }));
  } catch (error) {
  

    console.log("error saga")
  } finally {

    console.log("finally saga")
  }
};

const saga = function*() {
  yield takeLatest(REQUEST_API_DATA, setName);
};

export default saga;

