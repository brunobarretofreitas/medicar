import { Component, OnInit } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appointment } from '../shared/appointments.type';

import * as AppointmentsActions from '../store/appointments.actions';
import { appointmentsFeatureKey, State } from '../store/appointments.reducer';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss'],
})
export class AppointmentsListComponent implements OnInit {
  faPlus = faPlus;
  faTimes = faTimes;

  appointments$: Observable<Appointment[]>;

  constructor(private store: Store<{ appointments: State }>) {
    this.appointments$ = this.store
      .select(appointmentsFeatureKey)
      .pipe(map((state) => state.appointments));
  }

  ngOnInit(): void {
    this.store.dispatch(AppointmentsActions.loadAppointments());
  }
}
