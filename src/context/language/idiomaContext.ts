import { createContext } from "react";
import type { idiomaContextProps } from "../../types/idioma/idiomaTypes";

const IdiomaContext = createContext<idiomaContextProps>({
  idioma: "es",
  cambiarIdioma: () => { },
  contentJson: {} as any, // Placeholder, will be set by provider
});

export default IdiomaContext;