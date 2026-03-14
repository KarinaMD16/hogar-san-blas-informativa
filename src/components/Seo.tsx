import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import { Helmet } from "react-helmet-async";
import { defaultSeoImageUrl, toCanonicalUrl } from "../lib/seo";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
};

const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  robots = "index, follow",
}: SeoProps) => {
  const { contentJson, idioma } = useContext(IdiomaContext);

  const seoTitle = title ?? contentJson.seo.titulo;
  const seoDescription = description ?? contentJson.seo.descripcion;
  const seoKeywords = contentJson.seo.keywords;

  const canonicalUrl = path
    ? toCanonicalUrl(path)
    : toCanonicalUrl(contentJson.seo.url);
  const imageUrl = image ? toCanonicalUrl(image) : defaultSeoImageUrl;
  const locale = idioma === "en" ? "en_US" : "es_CR";

  return (
    <Helmet>
      <html lang={idioma} />

      <title>{seoTitle}</title>

      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonicalUrl} />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "NGO",
          "@id": "https://hogarsanblas.com/#organization",
          "name": "Hogar San Blas",
          "url": "https://hogarsanblas.com",
          "description": "Hogar dedicado al cuidado y bienestar de adultos mayores.",
          "logo": "${defaultSeoImageUrl}",
          "areaServed": "Costa Rica",
          "sameAs": [
            "https://facebook.com/hogar.sanblasdenicoya"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CR"
          }
        }
        `}
      </script>

      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Hogar San Blas" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={imageUrl} />

    </Helmet>
  );
};

export default Seo;