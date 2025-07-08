import { useState } from "react";
import { traducciones, type Idioma, type ProviderContextProps } from "../../types/idioma/idiomaTypes";
import IdiomaContext from "./idiomaContext";


export const IdiomaProvider = ({ children }: ProviderContextProps) => {
   const [idioma, setIdioma] = useState<Idioma>("es");

  const cambiarIdioma = () =>{
    setIdioma(idioma === "es" ? "en" : "es")
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