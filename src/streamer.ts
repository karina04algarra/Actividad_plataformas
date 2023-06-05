import { Canal} from "./canal";

export class Streamer{
    nickname: string;
    descripcion: string;
    redes_sociales: string;
    canales: Canal[];

    constructor(nickname: string, descripcion: string, redes_sociales: string){
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redes_sociales = redes_sociales;
        this.canales = [];
    }
}