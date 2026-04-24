import { useEffect, useState } from "react";
import type { Idioma, ProviderContextProps, TextosIdioma } from "../../types/idioma/idiomaTypes";
import IdiomaContext from "./idiomaContext";
import dataEs from "../../data/data.json";

export const IdiomaProvider = ({ children }: ProviderContextProps) => {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    const idiomaGuardado = localStorage.getItem("idioma");
    return idiomaGuardado === "en" || idiomaGuardado === "es"
      ? idiomaGuardado
      : "es";
  });

  const [contentJson, setContentJson] = useState<TextosIdioma>(dataEs);

  const cambiarIdioma = () => {
    setIdioma((prevIdioma) => (prevIdioma === "es" ? "en" : "es"));
  };

  useEffect(() => {
    localStorage.setItem("idioma", idioma);

    if (idioma === "es") {
      setContentJson(dataEs);
      return;
    }

    // English translations are loaded on demand to keep initial dependency chains shorter.
    import("../../data/dataEN.json")
      .then((module) => setContentJson(module.default))
      .catch(() => {
        setContentJson(dataEs);
      });
  }, [idioma]);

  return (
    <IdiomaContext.Provider value={{
      idioma,
      cambiarIdioma,
      contentJson,
    }}>
      {children}
    </IdiomaContext.Provider>
  );
};