import type { Donaciones } from "./donaciones";
import type { Hero } from "./hero";
import type { HistoriaPreview } from "./historia";
import type { Servicio } from "./servicios";
import type { UneteNosotros } from "./unete";

export interface DatosLanding {
  servicios: Servicio[];
  hero: Hero;
  //misionVision: MisionVision;
  reseñaHistorica: { descripcion: string };
  solicitudResidencia: { boton: string };
  casosExito: { boton: string };
  donaciones: Donaciones;
  historia: HistoriaPreview;
  uneteNosotros: UneteNosotros;
  formulario: { botones: string[] };
  footer: {
    Contactos: string[];
    Horario: string;
  };
}