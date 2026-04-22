import FooterMapa from "./FooterMapa";
import IdiomaContext from "../../context/language/idiomaContext";
import { useContext } from "react";
import Contactos from "../contactos/Contactos";
import FooterRedes from "./footerRedes";
import { cn } from "../../lib/utils";

type FooterProps = {
    className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
    const { contentJson } = useContext(IdiomaContext);

    return (
        <footer className="w-full bg-night text-white pb-4">
            <div className={cn("flex flex-col lg:flex-row justify-around bg-night text-white py-4 gap-8", className)}>
                <div id="footer-contactos" className="flex flex-col gap-2 mt-6 w-full lg:w-auto">
                    <Contactos className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-16 mb-8" />
                    <div id="linea-separadora" className="w-64 md:w-84 lg:w-100 h-0.5 bg-white rounded mx-auto" />
                    <FooterRedes />
                </div>
                <div className="flex flex-col items-center w-full lg:w-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold mb-4 text-center">
                        {contentJson.footer.mensaje}
                    </h2>
                    <FooterMapa />
                </div>
            </div>
            <p className="text-sm text-gray-400 mt-8 text-center w-full">
                {contentJson.footer.derechos}
            </p>
        </footer>
    );
};

export default Footer;