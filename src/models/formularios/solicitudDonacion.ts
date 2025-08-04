export interface CrearSolicitudDonacionDto {
    nombre: string;
    apellido1: string;
    apellido2: string;
    telefono: string;
    email: string;
    anonimo: boolean;
    tipoDonacion: string;
    descripcion: string;
    observaciones: string;
}

export interface SolicitudDonacion extends CrearSolicitudDonacionDto {
    id: number;
    createdAt?: string;
    updatedAt?: string;
}