import type { Hero } from "./hero";
import type { HistoriaPreview } from "./historia";
import type { misionVision } from "./misionVision";
import type { Servicio } from "./servicios";
import type { UneteNosotros } from "./unete";

export interface DatosLanding {
  servicios: Servicio[];
  hero: Hero;
  misionVision: misionVision;
  reseñaHistorica: { descripcion: string };
  solicitudResidencia: { boton: string };
  casosExito: { boton: string };
  donaciones: { botones: string[] };
  historia: HistoriaPreview;
  uneteNosotros: UneteNosotros;
  formulario: { botones: string[] };
  footer: {
    Contactos: string[];
    Horario: string;
  };
}