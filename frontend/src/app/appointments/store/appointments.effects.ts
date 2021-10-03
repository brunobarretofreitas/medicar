import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { NotifierService } from 'angular-notifier';

import * as AppointmentsActions from './appointments.actions';
import { AppointmentsService } from '../shared/appointments.service';

@Injectable()
export class AppointmentsEffects {
  performLoadAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentsActions.loadAppointments),
      exhaustMap((action) => {
        return this.appointmentsService.loadAppointments().pipe(
          map((response) =>
            AppointmentsActions.loadAppointmentsSuccess(response)
          ),
          catchError((error) =>
            of(AppointmentsActions.loadAppointmentsFailure())
          )
        );
      })
    )
  );

  loadAppointmentsError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentsActions.loadAppointmentsFailure),
      mergeMap(() => {
        this.notificationService.notify('error', 'Falha ao carregar consultas');

        return of(AppointmentsActions.stopLoadingAppointments());
      })
    )
  );

  constructor(
    private actions$: Actions,
    private appointmentsService: AppointmentsService,
    private notificationService: NotifierService
  ) {}
}
