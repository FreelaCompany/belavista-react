import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ListAmbientesActions from "../ducks/ambientes-list";

export function* listAmbientes() {
  try {
    const { data } = yield call(api.get, `/ambiente/all`);
    yield put(ListAmbientesActions.listAmbientesSuccess(data.data));
  } catch (err) {
    yield put(
      ListAmbientesActions.listAmbientesFailure(err.response.data.error.message)
    );
  }
}
