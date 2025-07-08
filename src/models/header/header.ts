export interface Opcion {
  texto: string;
  ruta: string;
};

export interface HeaderItem {
  titulo: string;
  opciones: Opcion[];
};

export interface Header {
    SobreNosotros: HeaderItem;
    Residencia: HeaderItem;
    Apoyanos: HeaderItem;
    Anuncios: HeaderItem;
    Contactos: HeaderItem;
};