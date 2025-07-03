import data from "./data.json";

export const getEntidad = (entidad: string) => data[entidad as keyof typeof data] || [];