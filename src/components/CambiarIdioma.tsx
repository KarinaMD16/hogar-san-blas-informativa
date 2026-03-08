import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import { HiMiniLanguage } from "react-icons/hi2";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const CambiarIdioma = () => {
  const { idioma, cambiarIdioma } = useContext(IdiomaContext);
  const iconControls = useAnimationControls();

  const handleCambiarIdioma = () => {
    cambiarIdioma();
    void iconControls.start({
      rotate: [0, -22, 20, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <motion.button
      onClick={handleCambiarIdioma}
      whileTap={{ scale: 0.96 }}
      className="flex items-center gap-2 hover:cursor-pointer"
      aria-label={
        idioma === "es" ? "Cambiar de español a inglés" : "Switch from English to Spanish"
      }
    >
      <motion.span animate={iconControls} className="inline-flex items-center">
        <HiMiniLanguage />
      </motion.span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={idioma}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {idioma === "es" ? "English" : "Español"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default CambiarIdioma;
