import { call, delay, put } from "redux-saga/effects";
import api from "../../services/api";
import ContatoActions from "../ducks/contato";

export function* contato(action) {
  try {
    const { data: post } = action;
    yield call(api.post, `/contato`, post);
    if (yield delay(2000)) {
      yield put(ContatoActions.contatoSuccess());
    }
  } catch (err) {
    yield put(ContatoActions.contatoFailure(err.response.data.error.message));
  }
}
