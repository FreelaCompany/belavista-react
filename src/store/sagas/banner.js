import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ListBannerActions from "../ducks/banner-list";

export function* listBanner() {
  try {
    const { data } = yield call(api.get, `/banner`);
    yield put(ListBannerActions.listBannerSuccess(data));
  } catch (err) {
    yield put(
      ListBannerActions.listBannerFailure(err.response.data.error.message)
    );
  }
}
