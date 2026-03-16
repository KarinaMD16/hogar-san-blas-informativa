import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import IdiomaContext from "../context/language/idiomaContext";

const FALLBACK_WHATSAPP_URL = "https://wa.me/50687000000";

function buildWhatsAppUrl(baseUrl: string, prefilledMessage: string) {
    const encodedMessage = encodeURIComponent(prefilledMessage);

    try {
        const parsedUrl = new URL(baseUrl);
        if (!parsedUrl.searchParams.get("text")) {
            parsedUrl.searchParams.set("text", prefilledMessage);
        }
        return parsedUrl.toString();
    } catch {
        const separator = baseUrl.includes("?") ? "&" : "?";
        return `${baseUrl}${separator}text=${encodedMessage}`;
    }
}

export default function WhatsappCTA() {
    const { contentJson, idioma } = useContext(IdiomaContext);

    const whatsappLink =
        contentJson.header.contacto.opciones.find(({ ruta }) =>
            /wa\.me|whatsapp/i.test(ruta)
        )?.ruta ?? FALLBACK_WHATSAPP_URL;

    const prefilledMessage =
        idioma === "es"
            ? "Hola, me gustaría recibir más información sobre estos procesos en el Hogar San Blas: "
            : "Hi, I’d like to receive more information about Hogar San Blas.";


    return (
        <a
            href={buildWhatsAppUrl(whatsappLink, prefilledMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={idioma === "es" ? "Enviar mensaje por WhatsApp" : "Send WhatsApp message"}
            className="fixed bottom-4 right-4 z-[60] flex items-center rounded-full bg-[#25D366] px-3 py-3 text-white transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
        >
            <FaWhatsapp className="text-4xl" aria-hidden="true" />
            <span className="hidden text-sm font-semibold sm:inline"></span>
        </a>
    );
}
