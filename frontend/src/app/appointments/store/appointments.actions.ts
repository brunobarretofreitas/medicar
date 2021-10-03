import { createAction, props } from '@ngrx/store';
import { Appointment, AppointmentsResponse } from '../shared/appointments.type';

export const loadAppointments = createAction(
  '[Appointments] Load Appointments'
);

export const stopLoadingAppointments = createAction(
  '[Appointments] Stop Load Appointments'
);

export const loadAppointmentsSuccess = createAction(
  '[Appointments] Load Appointments Success',
  props<AppointmentsResponse>()
);

export const loadAppointmentsFailure = createAction(
  '[Appointments] Load Appointments Failure'
);
