import { createAction, props } from '@ngrx/store';
import { RegisterPayload } from '../shared/register.type';

export const register = createAction(
  '[Register] Register',
  props<RegisterPayload>()
);

export const registerSuccess = createAction('[Register] Register Success');

export const registerFailed = createAction('[Register] Register Failed');
