export const crearResumen = (texto: string, maximo = 120) => {
    const normalizado = texto.replace(/\s+/g, " ").trim();

    if (normalizado.length <= maximo) {
        return normalizado;
    }

    const corte = normalizado.slice(0, maximo);
    const ultimoEspacio = corte.lastIndexOf(" ");
    const fragmento = ultimoEspacio > 70 ? corte.slice(0, ultimoEspacio) : corte;

    return `${fragmento.trimEnd()}...`;
};