import { Plataforma } from "./plataforma";
export class Stream{
    categoria: string;
    plataformas: Plataforma[];

    constructor(categoria: string){
        this.categoria = categoria;
        this.plataformas = []
    }
}