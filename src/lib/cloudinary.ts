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
  if (isCloudinaryUrl(url)) {
    const cropMode = height ? "fill" : "limit";
    const heightTransform = height ? `,h_${height}` : "";

    return url.replace(
      "/upload/",
      `/upload/w_${width}${heightTransform},c_${cropMode},g_auto,dpr_auto,f_auto,q_auto:eco/`
    );
  }

  const params = new URLSearchParams({
    url: normalizeRemoteUrl(url),
    w: width.toString(),
    output: "webp",
    q: "70",
    we: "",
    n: "-1",
  });

  if (height) {
    params.set("h", height.toString());
    params.set("fit", "cover");
  } else {
    params.set("fit", "inside");
  }

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