import { z } from 'zod';

export const formVoluntarioSchema = z.object({
  cedula: z
    .string()
    .min(9, { message: "La cédula debe tener al menos 9 dígitos" })
    .regex(/^\d+$/, { message: "La cédula debe contener solo números" }),
  nombre: z.string(),
  apellido1: z.string(),
  apellido2: z.string(),
  email: z.string().email({ message: "Debe ser un correo" }),
  telefono: z
    .string()
    .min(8, { message: "El numero de telefono debe tener al menos 8 dígitos" }),
  ocupacion: z.string(),
  direccion: z.string(),
  sexo: z.string(),
  experienciaLaboral: z.string(),
  tipoVoluntariado: z.number().min(1, "Debe seleccionar un tipo de voluntariado"),
  cantidadHoras: z.number().min(1, "Debe ingresar una cantidad de horas"),
  contactosEmergencia: z.array(
    z.object({
      nombre: z.string(),
      telefono: z.string(),
    })
  ),
  horarios: z.array(
    z.object({
      dia: z.string(),
      horaInicio: z.string(),
      horaFin: z.string(),
    })
  ),
  observaciones: z.string()
});

export const formDonacionSchema = z.object({
    nombre: z.string(),
    apellido1: z.string(),
    apellido2: z.string(),
    email: z.string().email({ message: "Debe ser un correo" }),
    telefono: z
      .string()
      .min(8, { message: "El número de teléfono debe tener al menos 8 dígitos" }),
    anonimo: z.boolean(),
    tipoDonacion: z.string(),
    descripcion: z.string(),
    observaciones: z.string()
  });
