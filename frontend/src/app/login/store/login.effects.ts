import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

import { NotifierService } from 'angular-notifier';

import { LoginService } from '../shared/login.service';
import * as LoginActions from './login.actions';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  performLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((action) => {
        return this.loginService.login(action.payload).pipe(
          map((response) => LoginActions.loginSuccess(response)),
          catchError((error) => of(LoginActions.loginFailed()))
        );
      })
    )
  );

  loginFailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginFailed),
      mergeMap(() => {
        this.notificationService.notify('error', 'Falha ao fazer login');

        return of(LoginActions.stopLoginProgress());
      })
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      mergeMap((action) => {
        const token = action.token;
        /** Save token on local storage */
        localStorage.setItem('medicar@token', token);

        this.router.navigate(['appointments'], { replaceUrl: true });
        return of(LoginActions.stopLoginProgress());
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotifierService
  ) {}
}
