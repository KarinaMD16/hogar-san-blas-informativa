export const transformCloudinaryUrl = (
  url: string,
  width: number,
  height?: number
) => {
  return url.replace(
    "/upload/",
    `/upload/w_${width},h_${height ?? width},c_fill,f_auto,q_auto/`
  );
};