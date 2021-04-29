import { combineReducers } from "redux";
import { reducer as produtosList } from "./produtos-list";
import { reducer as bannerList } from "./banner-list";

const reducers = combineReducers({
  produtosList,
  bannerList,
});

export default reducers;
