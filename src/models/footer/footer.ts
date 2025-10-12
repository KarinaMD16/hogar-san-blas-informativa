export interface Footer {
    // Short message shown in the footer (used in Footer.tsx)
    mensaje?: string;

    // Optional legacy properties (some locales may store contact groups here)
    Contactos?: string[];
    Horario?: string[];
    Direccion?: string[];
}