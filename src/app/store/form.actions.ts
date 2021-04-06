import { createAction, props } from '@ngrx/store';

const set = createAction('[Form] Set', props<{ value: any }>());

export const FormActions = { set };
