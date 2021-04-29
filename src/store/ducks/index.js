import { combineReducers } from "redux";
import { reducer as produtosList } from "./produtos-list";
import { reducer as bannerList } from "./banner-list";
import { reducer as ambientesList } from "./ambientes-list";
import { reducer as contatoList } from "./contato";

const reducers = combineReducers({
  produtosList,
  bannerList,
  ambientesList,
  contatoList,
});

export default reducers;
