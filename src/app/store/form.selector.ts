import { createSelector } from '@ngrx/store';

import { IState } from './index';

const selectFeature = (state: IState) => state;
const selectState = createSelector(selectFeature, ({ form }) => form);
const selectValue = createSelector(selectState, ({ value }) => value);
const selectExtendedValue = createSelector(selectValue, (value) => {
  return value ? { ...value, surname: 'NEW TEST' } : value;
});

export const FormSelectors = {
  selectExtendedValue,
};
