export type Sexo = 'F' | 'M';

export type TipoVoluntariado = 1 | 2;

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
  tipoVoluntariado: TipoVoluntariado;
  contactosEmergencia?: ContactoEmergenciaPendiente[];
  horarios?: HorarioPendiente[];
}

export interface SolicitudPendiente extends CrearSolicitudPendienteDto {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}