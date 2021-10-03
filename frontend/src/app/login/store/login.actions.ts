import { createAction, props } from '@ngrx/store';
import { LoginPayload, LoginResponse } from '../shared/login.type';

export const login = createAction(
  '[Login] Login',
  props<{ payload: LoginPayload }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<LoginResponse>()
);

export const loginFailed = createAction('[Login] Login Failed');

export const stopLoginProgress = createAction('[Login] Stop Login Progress');
