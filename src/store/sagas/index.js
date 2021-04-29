import { all, takeLatest } from "redux-saga/effects";

//banner
import { ListBannerTypes } from "../ducks/banner-list";
import { listBanner } from "./banner";

//produtos
import { ListTypes } from "../ducks/produtos-list";
import { list } from "./produtos";

export default function* rootSaga() {
  yield all([
    //banner
    takeLatest(ListBannerTypes.LIST_BANNER_REQUEST, listBanner),

    //produtos
    takeLatest(ListTypes.LIST_REQUEST, list),
  ]);
}
