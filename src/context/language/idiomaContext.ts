import { createContext } from "react";
import { traducciones, type idiomaContextProps } from "../../types/idioma/idiomaTypes";


const IdiomaContext = createContext<idiomaContextProps>({
  idioma: "es",
  cambiarIdioma: () => {},
  contentJson: traducciones.es,
});

export default IdiomaContext;