import type { SyntheticEvent } from "react";

type ResponsiveVariant = {
  width: number;
  height?: number;
};

const WSRV_BASE_URL = "https://wsrv.nl";
const ENABLE_EXTERNAL_IMAGE_PROXY =
  import.meta.env.VITE_ENABLE_EXTERNAL_IMAGE_PROXY !== "false";

const IMAGE_QUALITY = (import.meta.env.VITE_IMAGE_QUALITY as string) ?? "60";

const isRemoteHttpUrl = (url: string) => /^https?:\/\//i.test(url);

const normalizeRemoteUrl = (url: string) => {
  return url.replace(/^https?:\/\//, "");
};

const isCloudinaryUrl = (url: string) => {
  return url.includes("res.cloudinary.com") && url.includes("/upload/");
};

export const transformCloudinaryUrl = (
  url: string,
  width: number,
  height?: number
) => {
  const effectiveHeight = height ?? width;

  if (isCloudinaryUrl(url)) {
    return url.replace(
      "/upload/",
      `/upload/w_${width},h_${effectiveHeight},c_fill,g_auto,dpr_auto,f_auto,q_auto:eco/`
    );
  }

  if (!ENABLE_EXTERNAL_IMAGE_PROXY || !isRemoteHttpUrl(url)) {
    return url;
  }

  const params = new URLSearchParams({
    url: normalizeRemoteUrl(url),
    w: width.toString(),
    h: effectiveHeight.toString(),
    output: "webp",
    q: IMAGE_QUALITY,
    we: "",
    n: "-1",
    fit: "cover",
  });
  return `${WSRV_BASE_URL}/?${params.toString()}`;
};

export const handleImageProxyError = (
  event: SyntheticEvent<HTMLImageElement>
) => {
  const element = event.currentTarget;
  const fallbackSrc = element.dataset.fallbackSrc;

  if (!fallbackSrc || element.src === fallbackSrc) {
    return;
  }

  element.removeAttribute("srcset");
  element.src = fallbackSrc;
};

export const buildResponsiveSrcSet = (
  url: string,
  variants: ResponsiveVariant[]
) => {
  return variants
    .map(({ width, height }) => `${transformCloudinaryUrl(url, width, height)} ${width}w`)
    .join(", ");
};