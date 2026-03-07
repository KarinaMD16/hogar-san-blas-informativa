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
        <footer className={cn("flex flex-col lg:flex-row justify-around bg-night text-white py-8 gap-8", className)}>
            <div id="footer-contactos" className="flex flex-col gap-8 mt-4 w-full lg:w-auto">
                <Contactos className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10" />
                <div id="linea-separadora" className="w-64 md:w-84 lg:w-100 h-0.5 bg-white rounded mx-auto" />
                <FooterRedes />
            </div>
            <div className="flex flex-col items-center w-full lg:w-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold mb-4 text-center">
                    {contentJson.footer.mensaje}
                </h1>
                <FooterMapa />
            </div>
        </footer>
    );
};

export default Footer;