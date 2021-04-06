import { Action, createReducer, on } from '@ngrx/store';
import { FormActions } from './form.actions';

export interface IState {
  value: any;
}

const initialState: IState = {
  value: null,
};

const formReducer = createReducer(
  initialState,

  on(FormActions.set, (state, { value }) => ({ ...state, value }))
);

export function reducer(state: IState, action: Action): IState {
  return formReducer(state, action);
}
