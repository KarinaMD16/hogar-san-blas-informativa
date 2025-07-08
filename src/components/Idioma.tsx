import { useContext } from "react"
import IdiomaContext from "../context/language/idiomaContext"


const CambiarIdioma = () => {
    const {idioma, cambiarIdioma } = useContext(IdiomaContext)

  return (
    <button onClick={cambiarIdioma}>
      {idioma === "es" ? "Switch to English" : "Cambiar a Español"}
    </button>
  )
}

export default CambiarIdioma
