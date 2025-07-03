import type { Hero } from "./hero";
import type { Servicio } from "./servicios";

export interface DatosLanding {
  servicios: Servicio[];
  hero: Hero;
  //misionVision: MisionVision;
  reseñaHistorica: { descripcion: string };
  solicitudResidencia: { boton: string };
  casosExito: { boton: string };
  donaciones: { botones: string[] };
  historia: { boton: string };
  uneteNosotros: { botones: string[] };
  formulario: { botones: string[] };
  footer: {
    Contactos: string[];
    Horario: string;
  };
}