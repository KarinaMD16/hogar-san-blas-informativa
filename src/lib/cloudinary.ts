type ResponsiveVariant = {
  width: number;
  height?: number;
};

const WSRV_BASE_URL = "https://wsrv.nl";

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

  const params = new URLSearchParams({
    url: normalizeRemoteUrl(url),
    w: width.toString(),
    h: effectiveHeight.toString(),
    output: "webp",
    q: "70",
    we: "",
    n: "-1",
    fit: "cover",
  });
  return `${WSRV_BASE_URL}/?${params.toString()}`;
};

export const buildResponsiveSrcSet = (
  url: string,
  variants: ResponsiveVariant[]
) => {
  return variants
    .map(({ width, height }) => `${transformCloudinaryUrl(url, width, height)} ${width}w`)
    .join(", ");
};