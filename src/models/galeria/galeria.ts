export interface Galeria {
  id: number;
  imagenUrl: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface GaleriaCategoria {
  id:number;
  imagenUrl: string;
    categoriaId: number;
  
}