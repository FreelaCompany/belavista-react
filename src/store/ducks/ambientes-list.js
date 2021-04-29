import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  listAmbientesRequest: ["data"],
  listAmbientesSuccess: ["data"],
  listAmbientesFailure: ["error"],
});

export const ListAmbientesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

/* Reducers */

export const requestListAmbientes = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successListAmbientes = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const failureListAmbientes = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_AMBIENTES_REQUEST]: requestListAmbientes,
  [Types.LIST_AMBIENTES_SUCCESS]: successListAmbientes,
  [Types.LIST_AMBIENTES_FAILURE]: failureListAmbientes,
});
