export interface Opcion {
  texto: string;
  ruta: string;
};

export interface HeaderItem {
  titulo: string;
  opciones: Opcion[];
};

export interface Header {
    sobreNosotros: HeaderItem;
    residencia: HeaderItem;
    apoyanos: HeaderItem;
    anuncios: HeaderItem;
    contacto: HeaderItem;
};