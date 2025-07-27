import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const FooterRedes = () => {
  return (
    <div className="flex justify-center gap-12 md:gap-24 lg:gap-32 mt-6">
      <a
        href="https://facebook.com/hogar.sanblasdenicoya"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <BsFacebook className="size-6 text-amaranthPink" />
      </a>
      <a
        href="https://wa.me/50689729912"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <RiWhatsappFill className="size-7 text-amaranthPink" />
      </a>
    </div>
  );
};
export default FooterRedes;
