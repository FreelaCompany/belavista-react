import { all, takeLatest } from "redux-saga/effects";

//banner
import { ListBannerTypes } from "../ducks/banner-list";
import { listBanner } from "./banner";

//produtos
import { ListTypes } from "../ducks/produtos-list";
import { list } from "./produtos";

//ambientes
import { ListAmbientesTypes } from "../ducks/ambientes-list";
import { listAmbientes } from "./ambientes";

//contato
import { ContatoTypes } from "../ducks/contato";
import { contato } from "./contato";

export default function* rootSaga() {
  yield all([
    //banner
    takeLatest(ListBannerTypes.LIST_BANNER_REQUEST, listBanner),

    //ambientes
    takeLatest(ListAmbientesTypes.LIST_AMBIENTES_REQUEST, listAmbientes),

    //produtos
    takeLatest(ListTypes.LIST_REQUEST, list),

    //contato
    takeLatest(ContatoTypes.CONTATO_REQUEST, contato),
  ]);
}
