import { useContext } from "react"
import IdiomaContext from "../context/language/idiomaContext"
import { HiMiniLanguage } from "react-icons/hi2";

const CambiarIdioma = () => {
    const {idioma, cambiarIdioma } = useContext(IdiomaContext)

  return (
    <button onClick={cambiarIdioma} className="flex items-center gap-2 hover:cursor-pointer">
      <HiMiniLanguage />
      {idioma === "es" ? "English" : "Español"}
    </button>
  )
}

export default CambiarIdioma
