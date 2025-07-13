import { useState } from "react";
import { traducciones, type Idioma, type ProviderContextProps } from "../../types/idioma/idiomaTypes";
import IdiomaContext from "./idiomaContext";

export const IdiomaProvider = ({ children }: ProviderContextProps) => {
    const [idioma, setIdioma] = useState<Idioma>(() => {
      return (localStorage.getItem("idioma") as Idioma) || "es";
    });

  const cambiarIdioma = () =>{
    const nuevo = idioma === "es" ? "en" : "es";
    setIdioma(nuevo);
    localStorage.setItem("idioma", nuevo);
  }

  return (
    <IdiomaContext.Provider value={{
        idioma,
        cambiarIdioma,
        contentJson: idioma === "es" ? traducciones.es : traducciones.en,
      }}>
      {children}
    </IdiomaContext.Provider>
  );
};