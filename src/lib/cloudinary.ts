type ResponsiveVariant = {
  width: number;
  height?: number;
};

const WSRV_BASE_URL = "https://wsrv.nl";
const ENABLE_EXTERNAL_IMAGE_PROXY =
  import.meta.env.VITE_ENABLE_EXTERNAL_IMAGE_PROXY === "true";

const isRemoteHttpUrl = (url: string) => /^https?:\/\//i.test(url);

const isAlreadyOptimizedFormat = (url: string) =>
  /\.(webp|avif)(?:[?#].*)?$/i.test(url);

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

  if (
    !ENABLE_EXTERNAL_IMAGE_PROXY ||
    !isRemoteHttpUrl(url) ||
    isAlreadyOptimizedFormat(url)
  ) {
    return url;
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