import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import AppointmentsRoutingModule from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from '../shared/shared.module';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentsService } from './shared/appointments.service';
import * as fromAppointments from './store/appointments.reducer';
import { AppointmentsEffects } from './store/appointments.effects';

@NgModule({
  declarations: [AppointmentsComponent, AppointmentsListComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature(
      fromAppointments.appointmentsFeatureKey,
      fromAppointments.reducer
    ),
    EffectsModule.forFeature([AppointmentsEffects]),
  ],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
