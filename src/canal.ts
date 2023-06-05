import { Plataforma } from "./plataforma";

export class Canal{
    nombre: string;
    banner: string;
    descripcion: string;
    plataformas: Plataforma[];
    

    constructor(nombre: string, banner: string, descripcion: string){
    this.nombre = nombre;
    this.banner = banner;
    this.descripcion = descripcion;
    this.plataformas = [];
    }

}