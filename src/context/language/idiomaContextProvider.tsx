import { useEffect, useState } from "react";
import { traducciones, type Idioma, type ProviderContextProps } from "../../types/idioma/idiomaTypes";
import IdiomaContext from "./idiomaContext";

export const IdiomaProvider = ({ children }: ProviderContextProps) => {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    const idiomaGuardado = localStorage.getItem("idioma");
    return idiomaGuardado === "en" || idiomaGuardado === "es"
      ? idiomaGuardado
      : "es";
  });

  const cambiarIdioma = () => {
    setIdioma((prevIdioma) => (prevIdioma === "es" ? "en" : "es"));
  };

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

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