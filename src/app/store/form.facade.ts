import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormActions } from './form.actions';
import { FormSelectors } from './form.selector';

@Injectable({ providedIn: 'root' })
export class FormFacade {
  constructor(private readonly _store: Store) {}

  public readonly formValueExtended = this._store.select(FormSelectors.selectExtendedValue);

  public set(value: any): void {
    this._store.dispatch(FormActions.set({ value }));
  }
}
