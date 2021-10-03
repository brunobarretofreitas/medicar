import { Action, createReducer, on } from '@ngrx/store';
import { Appointment } from '../shared/appointments.type';

import * as AppointmentsActions from './appointments.actions';

/**
 * Feature key name to use on Module declaration
 */
export const appointmentsFeatureKey = 'appointments';

export interface State {
  /**
   * Indicates if appointments are being loaded
   */
  loadingAppointments: boolean;
  appointments: Appointment[];
}

export const initialState: State = {
  loadingAppointments: false,
  appointments: [],
};

const appointmentsReducer = createReducer(
  initialState,
  on(AppointmentsActions.loadAppointmentsSuccess, (state, response) => ({
    ...state,
    loadingAppointments: false,
    appointments: response.results,
  })),
  on(AppointmentsActions.stopLoadingAppointments, (state) => ({
    ...state,
    loadingAppointments: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return appointmentsReducer(state, action);
}
