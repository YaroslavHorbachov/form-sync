import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { FormFacade } from '../store/form.facade';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private readonly _formFacade: FormFacade, private readonly _fb: FormBuilder) {}

  ngOnInit(): void {}

  private _form: FormGroup;

  private _sub = new Subscription();

  public readonly form$ = this._formFacade.formValueExtended.pipe(
    map((value) => {
      if (this._form) {
        console.log('patch');
        this._form.patchValue(value, { emitEvent: false });
      } else {
        console.log('init');
        this._form = this._fb.group({
          name: '',
          surname: '',
        });

        this._form.valueChanges.subscribe((value) => {
          console.log('sync');
          this._formFacade.set(value);
        });
      }

      return this._form;
    })
  );
}
