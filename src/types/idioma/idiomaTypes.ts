import data from "../../data/data.json";
import dataEN from "../../data/dataEN.json";

export type idiomaContextProps = {
   idioma: Idioma;
  cambiarIdioma: () => void;
  contentJson: TextosIdioma;
}

export interface ProviderContextProps {
  children: React.ReactNode;
}

export type TextosIdioma = typeof data;

export type Idioma = "es" | "en";

export const traducciones: Record<Idioma, TextosIdioma> = {
  es: data,
  en : dataEN,
};