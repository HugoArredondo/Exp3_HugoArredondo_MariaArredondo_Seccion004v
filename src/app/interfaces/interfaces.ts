// export interface Regiones {
//     codigo: string;
//     tipo: string;
//     nombre: string;
//     lat: number;
//     lng: number;
//     url: string;
//     codigo_padre: string;
// }

export interface Root {
  categories: Category[];
}
  
export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}