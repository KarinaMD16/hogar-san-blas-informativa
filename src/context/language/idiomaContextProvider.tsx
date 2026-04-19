import { useEffect, useState } from "react";
import type { Idioma, ProviderContextProps, TextosIdioma } from "../../types/idioma/idiomaTypes";
import IdiomaContext from "./idiomaContext";

export const IdiomaProvider = ({ children }: ProviderContextProps) => {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    const idiomaGuardado = localStorage.getItem("idioma");
    return idiomaGuardado === "en" || idiomaGuardado === "es"
      ? idiomaGuardado
      : "es";
  });

  const [contentJson, setContentJson] = useState<TextosIdioma | null>(null);

  const cambiarIdioma = () => {
    setIdioma((prevIdioma) => (prevIdioma === "es" ? "en" : "es"));
  };

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
    // Dynamically import only the needed language file
    import(idioma === "es" ? "../../data/data.json" : "../../data/dataEN.json")
      .then((module) => setContentJson(module.default))
      .catch(() => {
        // Fallback - import with relative path
        import(idioma === "es" ? "../../data/data.json" : "../../data/dataEN.json").then((module) =>
          setContentJson(module.default)
        );
      });
  }, [idioma]);

  if (!contentJson) {
    return null; // or a loading state
  }

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