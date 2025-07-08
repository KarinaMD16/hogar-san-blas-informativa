import type { ReactNode } from "react";

interface FooterSectionProps {
  title: string;
  items: string[];
  icons: ReactNode[];
}

const FooterSection = ({ title, items, icons }: FooterSectionProps) => {
  return (
    <div className="footer-section">
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

export default FooterSection;
