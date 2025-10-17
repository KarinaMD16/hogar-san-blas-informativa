import { z } from 'zod';

export const formVoluntarioSchema = z.object({
  cedula: z
    .string()
    .min(9, "La cédula debe tener al menos 9 dígitos")
    .max(20, "La cédula no puede tener más de 20 dígitos")
    .regex(/^\d+$/, "La cédula debe contener solo números"),
  
  nombre: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  
  apellido1: z.string()
    .min(2, "El primer apellido debe tener al menos 2 caracteres")
    .max(50, "El primer apellido no puede tener más de 50 caracteres"),
  
  apellido2: z.string()
    .max(50, "El segundo apellido no puede tener más de 50 caracteres")
    .optional(),
  
  email: z.string()
    .email("Debe ser un correo electrónico válido")
    .max(100, "El correo no puede tener más de 100 caracteres"),
  
  telefono: z.string()
    .min(8, "El número de teléfono debe tener al menos 8 dígitos")
    .max(15, "El número de teléfono no puede tener más de 15 caracteres")
    .regex(/^[0-9+\-\s()]+$/, "Formato de teléfono inválido"),
  
  ocupacion: z.string()
    .min(2, "La ocupación debe tener al menos 2 caracteres")
    .max(100, "La ocupación no puede tener más de 100 caracteres"),
  
  direccion: z.string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(200, "La dirección no puede tener más de 200 caracteres"),
  
  sexo: z.enum(["M", "F"], {
    errorMap: () => ({ message: "Seleccione un género válido" })
  }),
  
  experienciaLaboral: z.string()
    .max(1000, "La experiencia no puede tener más de 1000 caracteres")
    .optional(),
  
  tipoVoluntariado: z.number()
    .min(1, "Debe seleccionar un tipo de voluntariado"),
  
  cantidadHoras: z.number()
    .min(1, "Debe ingresar una cantidad de horas")
    .optional(),
  
  contactosEmergencia: z.array(
    z.object({
      nombre: z.string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(100, "El nombre no puede tener más de 100 caracteres"),
      telefono: z.string()
        .min(8, "El teléfono debe tener al menos 8 dígitos")
        .max(15, "El teléfono no puede tener más de 15 caracteres")
        .regex(/^[0-9+\-\s()]+$/, "Formato de teléfono inválido")
    })
  ).min(1, "Debe agregar al menos un contacto de emergencia"),
  
  horarios: z.array(
    z.object({
      dia: z.enum(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]),
      horaInicio: z.string()
        .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato de hora inválido (HH:MM)"),
      horaFin: z.string()
        .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato de hora inválido (HH:MM)")
    })
  ).min(1, "Debe agregar al menos un horario disponible"),
  
  observaciones: z.string()
    .max(1000, "Las observaciones no pueden tener más de 1000 caracteres")
    .optional()
});

export const formDonacionSchema = z.object({
  cedula: z
    .string()
    .min(9, "La cédula debe tener al menos 9 dígitos")
    .max(20, "La cédula no puede tener más de 20 dígitos")
    .regex(/^\d+$/, "La cédula debe contener solo números"),

  nombre: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
    
  apellido1: z.string()
    .min(2, "El primer apellido debe tener al menos 2 caracteres")
    .max(50, "El primer apellido no puede tener más de 50 caracteres"),
  
  apellido2: z.string()
    .max(50, "El segundo apellido no puede tener más de 50 caracteres")
    .optional(),
  
  email: z.string()
    .email("Debe ser un correo electrónico válido")
    .max(100, "El correo no puede tener más de 100 caracteres"),
  
  telefono: z.string()
    .min(8, "El número de teléfono debe tener al menos 8 dígitos")
    .max(15, "El número de teléfono no puede tener más de 15 caracteres")
    .regex(/^[0-9+\-\s()]+$/, "Formato de teléfono inválido"),
  
  anonimo: z.boolean()
    .default(false),
  
  tipoDonacion: z.string()
    .min(1, "Debe seleccionar un tipo de donación")
    .max(15, "El tipo de donación no puede tener más de 15 caracteres"),
  
  descripcion: z.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(200, "La descripción no puede tener más de 200 caracteres"),
  
  observaciones: z.string()
    .max(200, "Las observaciones no pueden tener más de 200 caracteres")
    .optional()
});
