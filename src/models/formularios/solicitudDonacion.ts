export interface CrearSolicitudDonacionDto {
    cedula: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    telefono: string;
    email: string;
    anonimo: boolean;
    descripcion: string;
    tipoDonacion: string;
    observaciones: string;
}

export interface SolicitudDonacion extends CrearSolicitudDonacionDto {
    id: number;
    createdAt?: string;
    updatedAt?: string;
}