import type { Footer } from "./footer/footer";
import type { Header } from "./header/navbar";
import type { CasosExito } from "./sections/casosExito";
import type { Donaciones } from "./sections/donaciones";
import type { Hero } from "./sections/hero";
import type { HistoriaPreview } from "./sections/historia";
import type { misionVision } from "./sections/misionVision";
import type { Servicio } from "./sections/servicios";
import type { solicitarResidencia } from "./sections/solicitarResidencia";
import type { UneteNosotros } from "./sections/unete";
import type { SeccionReseñaHistorica } from "./reseñaHistorica/seccionReseñaHistorica";

export interface DatosLanding {
  header: Header
  hero: Hero;
  misionVision: misionVision;
  servicios: Servicio[];
  solicitudResidencia: solicitarResidencia;
  casosExito: CasosExito;
  donaciones: Donaciones;
  historia: HistoriaPreview;
  uneteNosotros: UneteNosotros;
  footer: Footer;
  paginaReseñaHistorica: SeccionReseñaHistorica[];
  formulario: { botones: string[] };
}