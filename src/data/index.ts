import type { DatosLanding } from "../models/datosLanding";
import data from "./data.json";

const datos = data as DatosLanding;

export function getEntidad<K extends keyof DatosLanding>(
  key: K
): DatosLanding[K] {
  return datos[key];
}
