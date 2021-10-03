export interface Speciality {
  id: number;
  nome: string;
}

export interface Doctor {
  id: number;
  crm: number;
  nome: string;
  especialidade: Speciality;
}

export interface Appointment {
  id: number;
  dia: string;
  horario: string;
  data_agendamento: string;
  medico: Doctor;
}

export interface AppointmentsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Appointment[];
}
