import { AiFillMail } from "react-icons/ai";
import { BiSolidDirections } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsCalendar3WeekFill,
  BsClockFill,
} from "react-icons/bs";
import { PiMapPinSimpleFill } from "react-icons/pi";
import ContactosSection from "./ContactosSectionProps";
import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import type { ContactosProps } from "../../models/contactos/contactos";

const Contactos = ({ className }: ContactosProps) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <div className={className}>
      <ContactosSection
        title={contentJson.contactos.Contactos.titulo}
        items={contentJson.contactos.Contactos.items}
        icons={[
          <BsFillTelephoneFill
            key="tel1"
            className="inline-block mr-1 text-amaranthPink text-lg"
          />,
          <BsFillTelephoneFill
            key="tel2"
            className="inline-block mr-1 text-amaranthPink text-lg"
          />,
          <AiFillMail
            key="mail"
            className="inline-block mr-1 text-amaranthPink text-lg"
          />,
        ]}
      />
      <ContactosSection
        title={contentJson.contactos.Horario.titulo}
        items={contentJson.contactos.Horario.items}
        icons={[
          <BsCalendar3WeekFill
            key="calendar"
            className="inline-block mr-1 text-amaranthPink text-base"
          />,
          <BsClockFill
            key="clock"
            className="inline-block mr-1 text-amaranthPink text-base"
          />,
        ]}
      />
      <ContactosSection
        title={contentJson.contactos.Direccion.titulo}
        items={contentJson.contactos.Direccion.items}
        icons={[
          <BiSolidDirections
            key="directions"
            className="inline-block mr-1 text-amaranthPink text-xl"
          />,
          <PiMapPinSimpleFill
            key="map"
            className="inline-block mr-1 text-amaranthPink text-xl"
          />,
        ]}
      />
    </div>
  );
};

export default Contactos;