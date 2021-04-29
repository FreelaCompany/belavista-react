import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  contatoRequest: ["data"],
  contatoSuccess: ["data"],
  contatoFailure: ["error"],
});

export const ContatoTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
  success: null,
};

/* Reducers */

export const requestContato = (state) =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successContato = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
    success: { $set: true },
  });

export const failureContato = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONTATO_REQUEST]: requestContato,
  [Types.CONTATO_SUCCESS]: successContato,
  [Types.CONTATO_FAILURE]: failureContato,
});
