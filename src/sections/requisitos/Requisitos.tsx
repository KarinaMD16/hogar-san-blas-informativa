import { BsFillClipboardCheckFill } from "react-icons/bs";
import type { RequisitosProps } from "../../models/requisitos/requisitos";

const Requisitos = ({ items }: RequisitosProps) => {
  return (
    <div className="flex flex-col gap-6 font-opensans text-black text-left text-md sm:ml-8 2xl:ml-28 w-80 sm:w-full">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 sm:gap-3">
          <BsFillClipboardCheckFill className="text-amaranthPink size-8 sm:size-11 text-lg mt-0.5 shrink-0" />
          <p className="text-md sm:text-base md:text-lg whitespace-pre-line">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Requisitos;
