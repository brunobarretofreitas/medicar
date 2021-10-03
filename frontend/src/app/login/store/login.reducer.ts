import { Action, createReducer, on } from '@ngrx/store';

import * as LoginActions from './login.actions';

/**
 * Feature key name to use on Module declaration
 */
export const loginFeatureKey = 'login';

export interface State {
  /**
   * Indicates if the login is being performed
   */
  performingLogin: boolean;
}

export const initialState: State = {
  performingLogin: false,
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({ performingLogin: true })),
  on(LoginActions.stopLoginProgress, (state) => ({ performingLogin: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
