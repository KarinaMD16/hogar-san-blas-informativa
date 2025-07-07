import type { CasosExito } from "./sections/casosExito";
import type { Donaciones } from "./sections/donaciones";
import type { Hero } from "./sections/hero";
import type { HistoriaPreview } from "./sections/historia";
import type { misionVision } from "./sections/misionVision";
import type { Servicio } from "./sections/servicios";
import type { solicitarResidencia } from "./sections/solicitarResidencia";
import type { UneteNosotros } from "./sections/unete";

export interface DatosLanding {
  servicios: Servicio[];
  hero: Hero;
  misionVision: misionVision;
  reseñaHistorica: { descripcion: string };
  solicitudResidencia: solicitarResidencia;
  casosExito: CasosExito;
  donaciones: Donaciones;
  historia: HistoriaPreview;
  uneteNosotros: UneteNosotros;
  formulario: { botones: string[] };
  footer: {
    Contactos: string[];
    Horario: string;
  };
}