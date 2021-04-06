import { ActionReducerMap } from '@ngrx/store';
import * as fromForm from './form.reducer';

export const featureKey = 'form';

export interface IState {
  form: fromForm.IState;
}

export const actionReducerMap: ActionReducerMap<IState> = {
  form: fromForm.reducer,
};
