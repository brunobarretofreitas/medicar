import { createAction, props } from '@ngrx/store';

import { LoginResponse } from 'src/app/login/shared/login.type';

/**
 * Action to get user from localStore or API
 */
export const loadUser = createAction(
  '[Auth] Load User',
  props<LoginResponse>()
);
