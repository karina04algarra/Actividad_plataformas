import { Stream } from "./stream";

export class Categoria{
    nombre: string;
    descripcion: string;
    imagen: string;
    stremers: Stream[]

    constructor(nombre: string, descripcion: string, imagen: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.stremers = [];
    }
}