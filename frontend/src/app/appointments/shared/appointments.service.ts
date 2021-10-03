import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import buildUrl from '../../shared/utils/url-builder';
import { AppointmentsResponse } from './appointments.type';

@Injectable()
export class AppointmentsService {
  appointmentsUrl: string = buildUrl('consultas');

  constructor(private http: HttpClient) {}

  loadAppointments(): Observable<AppointmentsResponse> {
    /**
     * Performs load appointments action.
     *
     * Call the consultas endpoint from Medicar API
     *
     * @return {Observable<AppointmentsResponse>}
     */
    return this.http.get<AppointmentsResponse>(this.appointmentsUrl);
  }
}
