const SEO_BASE_URL = "https://hogarsanblas.com";
const SEO_DEFAULT_IMAGE_PATH = "/logo_hogar_san_blas.png";

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export const toCanonicalUrl = (pathOrUrl: string) => {
    if (!pathOrUrl) {
        return SEO_BASE_URL;
    }

    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl.replace(/\/$/, "");
    }

    const normalizedPath = trimSlashes(pathOrUrl);
    if (!normalizedPath) {
        return SEO_BASE_URL;
    }

    return `${SEO_BASE_URL}/${normalizedPath}`;
};

export const defaultSeoImageUrl = toCanonicalUrl(SEO_DEFAULT_IMAGE_PATH);
export const siteUrl = SEO_BASE_URL;
