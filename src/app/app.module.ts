import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { actionReducerMap } from './store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, StoreModule.forRoot(actionReducerMap), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
