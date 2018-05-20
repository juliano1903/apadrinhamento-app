import { Usuario } from "./usuario";

export class VinculoUsuarios {

    idVinculoUsuario: number;
    usuarioCalouro: Usuario;
    usuarioVeterano: Usuario;
    motivoDesvinculacao: string;
    dataDesvinculacao: string;
    dataVinculacao: string;
    nomeSalaChat: string;
    keySalaChat: string;

    setVeterano(usuario: Usuario) {
        this.usuarioVeterano = usuario;
    }

    setCalouro(usuario: Usuario) {
        this.usuarioCalouro = usuario;
    }

    getCalouro() {
        return this.usuarioCalouro
    }

    getVeterano() {
        return this.usuarioVeterano;
    }
}