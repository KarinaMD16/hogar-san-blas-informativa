import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import { Helmet } from "react-helmet-async";

const Seo = () => {
  const { contentJson, idioma } = useContext(IdiomaContext);

  return (
    <Helmet>

      <html lang={idioma} />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "Hogar San Blas",
          "url": "https://hogarsanblas.com",
          "description": "Hogar dedicado al cuidado y bienestar de adultos mayores.",
          "areaServed": "Costa Rica",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CR"
          }
        }
        `}
      </script>

      <title>{contentJson.seo.titulo}</title>

      <meta
        name="description"
        content={contentJson.seo.descripcion}
      />

      <meta property="og:title" content={contentJson.seo.titulo} />

      <meta
        property="og:description"
        content={contentJson.seo.descripcion}
      />

      <meta property="og:url" content={contentJson.seo.url} />

      <link rel="canonical" href={contentJson.seo.url} />

    </Helmet>
  );
};

export default Seo;