import FooterSection from "./FooterSectionProps";
import { AiFillMail } from "react-icons/ai";
import { BiSolidDirections } from "react-icons/bi";
import { BsFillTelephoneFill, BsCalendar3WeekFill, BsClockFill } from "react-icons/bs";
import { PiMapPinSimpleFill } from "react-icons/pi";
import FooterMapa from "./FooterMapa";
import IdiomaContext from "../../context/language/idiomaContext";
import { useContext } from "react";
import FooterRedes from "./footerRedes";

const Footer = () => {
  const { contentJson } = useContext(IdiomaContext);

    return (
        <footer className="flex flex-col lg:flex-row justify-around bg-night text-white py-8 gap-8">
            <div className="flex flex-col gap-8 mt-4 w-full lg:w-auto">
                <div id="footer-contactos" className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
                    <FooterSection 
                        title="Contactos"
                        items={contentJson.footer.Contactos}
                        icons={[
                        <BsFillTelephoneFill key="tel1" className="inline-block mr-1 text-amaranthPink size-4" />,
                        <BsFillTelephoneFill key="tel2" className="inline-block mr-1 text-amaranthPink size-4" />,
                        <AiFillMail key="mail" className="inline-block mr-1 text-amaranthPink size-4" />,
                        ]}
                    />
                    <FooterSection
                        title="Horario"
                        items={contentJson.footer.Horario}
                        icons={[
                        <BsCalendar3WeekFill key="calendar" className="inline-block mr-1 text-amaranthPink size-3.5" />,
                        <BsClockFill key="clock" className="inline-block mr-1 text-amaranthPink size-3.5" />,
                        ]}
                    />
                    <FooterSection
                        title="Dirección"
                        items={contentJson.footer.Direccion}
                        icons={[
                        <BiSolidDirections key="directions" className="inline-block mr-1 text-amaranthPink size-5" />,
                        <PiMapPinSimpleFill key="map" className="inline-block mr-1 text-amaranthPink size-5" />,
                        ]}
                    />
                </div>
                <div id="linea-separadora" className="w-64 md:w-84 lg:w-100 h-0.5 bg-white rounded mx-auto" />
                <FooterRedes />
            </div>
            <div className="flex flex-col items-center w-full lg:w-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold mb-4 text-center">
                    ¡Vísitanos!
                </h1>
                <FooterMapa />
            </div>
        </footer>
    );
};

export default Footer;