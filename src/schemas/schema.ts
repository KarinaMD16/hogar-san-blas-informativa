import { z } from 'zod';

export const formVoluntarioSchema = z.object({
    cedula: z.string()
        .min(9, { message: 'La cédula debe tener al menos 9 dígitos' })
        .regex(/^\d+$/, { message: 'La cédula debe contener solo números' }),
    nombre: z.string(),
    apellido1: z.string(),
    apellido2: z.string(),
    email: z.string().email({ message: 'Debe ser un correo' }),
    telefono: z.string()
        .min(8, { message: 'El numero de telefono debe tener al menos 9 dígitos' })
        .regex(/^\d+$/, { message: 'La cédula debe contener solo números' }),
    ocupacion: z.string(),
    direccion: z.string(),
    sexo: z.string(),
    experienciaLaboral: z.string(),
    tipoVoluntariado: z.string(),
})