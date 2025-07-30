export type Sexo = 'F' | 'M';

export interface TipoVoluntariado{
  id: number,
  nombre: string;
}

export interface ContactoEmergenciaPendiente {
  nombre: string;
  telefono: string;
}

export interface HorarioPendiente {
  dia: string;
  horaInicio: string;
  horaFin: string;
}

export interface CrearSolicitudPendienteDto {
  cedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  telefono: string;
  ocupacion: string;
  direccion: string;
  sexo: Sexo;
  experienciaLaboral?: string;
  tipoVoluntariado: number;
  contactosEmergencia?: ContactoEmergenciaPendiente[];
  horarios?: HorarioPendiente[];
  observaciones: string;
}

export interface SolicitudPendiente extends CrearSolicitudPendienteDto {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}