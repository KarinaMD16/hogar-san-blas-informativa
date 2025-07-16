import type { ContactosSectionProps } from "../../models/contactos/contactos";

const ContactosSection = ({ title, items, icons }: ContactosSectionProps) => {
  return (
    <div>
      <h4 className="text-xl font-semibold inline-block border-b-2 border-ecruYellow pb-1 mb-2">
        {title}
      </h4>
      <p className="text-sm mt-2">
        {items.map((item, idx) => (
          <span key={idx}>
            {icons[idx]}
            {item}
            <br />
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default ContactosSection;
