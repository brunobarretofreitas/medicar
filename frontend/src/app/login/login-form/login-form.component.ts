import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as LoginActions from '../store/login.actions';
import { State, loginFeatureKey } from '../store/login.reducer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  performingLogin$: Observable<boolean>;
  /**
   * Login FormGroup
   */
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberPassword: new FormControl(false),
  });

  constructor(private router: Router, private store: Store<{ login: State }>) {
    this.performingLogin$ = this.store
      .select(loginFeatureKey)
      .pipe(map((state) => state.performingLogin));
  }

  navigateToRegister() {
    this.router.navigate(['register'], { replaceUrl: true });
  }

  onSubmit() {
    this.store.dispatch(
      LoginActions.login({ payload: this.form.getRawValue() })
    );
  }
}
