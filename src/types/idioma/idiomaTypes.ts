import type data from "../../data/data.json";

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