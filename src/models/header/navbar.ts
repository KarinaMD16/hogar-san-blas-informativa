export interface Opcion {
  texto: string;
  ruta: string;
};

export interface NavItem {
  titulo: string;
  opciones: Opcion[];
};

export interface navbar {
    sobreNosotros: NavItem;
    residencia: NavItem;
    apoyanos: NavItem;
    anuncios: NavItem;
    contacto: NavItem;
};