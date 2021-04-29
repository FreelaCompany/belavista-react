import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ListActions from "../ducks/produtos-list";

export function* list() {
  try {
    const { data } = yield call(api.get, `/produtos`);
    yield put(ListActions.listSuccess(data.data));
  } catch (err) {
    yield put(ListActions.listFailure(err.response.data.error.message));
  }
}
